import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const MANIFEST_PATH = path.join(ROOT, "content", "image-manifest.json");
const PUBLIC_IMAGES_DIR = path.join(ROOT, "public", "images", "keywords");
const ARTICLE_FILES = [
  path.join(ROOT, "content", "keywords.ts"),
  path.join(ROOT, "content", "color-keywords.ts"),
  path.join(ROOT, "content", "remaining-keyword-overrides.ts")
];

const args = new Set(process.argv.slice(2));
const shouldGenerate = args.has("--generate");
const dryRun = args.has("--dry-run") || !shouldGenerate;
const force = args.has("--force");
const model = readArg("--model") ?? "gpt-image-1";
const quality = readArg("--quality") ?? "medium";
const size = readArg("--size") ?? "1536x1024";

loadEnvFiles([".env.local", ".env"]);

function readArg(name) {
  const prefix = `${name}=`;
  const value = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return value ? value.slice(prefix.length) : undefined;
}

function readJson(filePath) {
  const text = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
  return JSON.parse(text);
}

function loadEnvFiles(fileNames) {
  for (const fileName of fileNames) {
    const filePath = path.join(ROOT, fileName);
    if (!fileExists(filePath)) {
      continue;
    }

    const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
        continue;
      }

      const [key, ...valueParts] = trimmed.split("=");
      const value = valueParts.join("=").replace(/^['"]|['"]$/g, "");

      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  }
}

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

function fileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

function readArticleSources() {
  return ARTICLE_FILES
    .filter((filePath) => fileExists(filePath))
    .map((filePath) => fs.readFileSync(filePath, "utf8"))
    .join("\n");
}

function imagePathFromManifestEntry(manifest, entry) {
  const outputDirectory = manifest.outputDirectory ?? "/images/keywords/";
  const relativePath = path.join(
    outputDirectory.replace(/^\//, ""),
    entry.filename
  );
  return path.join(ROOT, "public", relativePath.replace(/^public[\\/]/, ""));
}

function publicSrcFromManifestEntry(manifest, entry) {
  const outputDirectory = manifest.outputDirectory ?? "/images/keywords/";
  return `${outputDirectory.replace(/\/?$/, "/")}${entry.filename}`;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function summarize(manifest) {
  const articleSources = readArticleSources();
  const images = manifest.images ?? [];
  const existingImages = [];
  const articlesWithExistingImages = [];
  const needsImages = [];

  for (const entry of images) {
    const publicSrc = publicSrcFromManifestEntry(manifest, entry);
    const outputPath = imagePathFromManifestEntry(manifest, entry);
    const hasImageFile = fileExists(outputPath) && fileSize(outputPath) > 0;
    const hasArticleReference = new RegExp(escapeRegex(publicSrc)).test(articleSources);

    if (hasImageFile) {
      existingImages.push({ ...entry, publicSrc, outputPath });
    }

    if (hasImageFile) {
      articlesWithExistingImages.push({
        ...entry,
        publicSrc,
        outputPath,
        reference: hasArticleReference ? "static article reference" : "manifest image reference"
      });
    }

    if (!hasImageFile) {
      needsImages.push({
        ...entry,
        publicSrc,
        outputPath,
        reason: "missing image file"
      });
    }
  }

  return {
    totalManifestEntries: images.length,
    articlesWithExistingImages,
    imagesThatAlreadyExist: existingImages,
    articlesThatNeedImages: force
      ? images.map((entry) => ({
          ...entry,
          publicSrc: publicSrcFromManifestEntry(manifest, entry),
          outputPath: imagePathFromManifestEntry(manifest, entry),
          reason: "forced generation"
        }))
      : needsImages,
  };
}

function printDryRun(summary) {
  console.log("PromptAtlas image generation dry run");
  console.log("------------------------------------");
  console.log(`Total manifest entries: ${summary.totalManifestEntries}`);
  console.log(`Articles with existing images: ${summary.articlesWithExistingImages.length}`);
  console.log(`Images that already exist: ${summary.imagesThatAlreadyExist.length}`);
  console.log(`Articles that still need images: ${summary.articlesThatNeedImages.length}`);
  console.log(`Estimated number of images to generate: ${summary.articlesThatNeedImages.length}`);

  if (summary.imagesThatAlreadyExist.length) {
    console.log("\nSkipped existing image files:");
    for (const entry of summary.imagesThatAlreadyExist) {
      console.log(`- ${entry.keywordSlug}: ${entry.filename}`);
    }
  }

  if (summary.articlesWithExistingImages.length) {
    console.log("\nArticles with existing images:");
    for (const entry of summary.articlesWithExistingImages) {
      console.log(`- ${entry.keywordSlug}: ${entry.publicSrc} (${entry.reference})`);
    }
  }

  if (summary.articlesThatNeedImages.length) {
    console.log("\nImages needed:");
    for (const entry of summary.articlesThatNeedImages) {
      console.log(`- ${entry.keywordSlug}: ${entry.filename} (${entry.reason})`);
    }
  }
}

async function generateImages(manifest, entries) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required when running with --generate.");
  }

  const { default: OpenAI } = await import("openai");
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  ensureDirectory(PUBLIC_IMAGES_DIR);

  for (const entry of entries) {
    if (!force && fileExists(entry.outputPath) && fileSize(entry.outputPath) > 0) {
      console.log(`[skipped] ${entry.keywordSlug}: ${entry.filename} already exists`);
      continue;
    }

    try {
      console.log(`[generating] ${entry.keywordSlug}: ${entry.filename}`);
      const result = await client.images.generate({
        model,
        prompt: entry.generationPrompt,
        size,
        quality,
        n: 1
      });

      const imageBase64 = result.data?.[0]?.b64_json;

      if (!imageBase64) {
        throw new Error("OpenAI response did not include b64_json image data.");
      }

      fs.writeFileSync(entry.outputPath, Buffer.from(imageBase64, "base64"));
      console.log(`[generated] ${entry.keywordSlug}: ${path.relative(ROOT, entry.outputPath)}`);
    } catch (error) {
      console.error(`[failed] ${entry.keywordSlug}: ${error.message}`);
    }
  }
}

const manifest = readJson(MANIFEST_PATH);
const summary = summarize(manifest);

if (dryRun) {
  printDryRun(summary);
  process.exit(0);
}

console.log("PromptAtlas image generation");
console.log("----------------------------");
console.log(`Model: ${model}`);
console.log(`Size: ${size}`);
console.log(`Quality: ${quality}`);
console.log(`Images to generate: ${summary.articlesThatNeedImages.length}`);

await generateImages(manifest, summary.articlesThatNeedImages);
