import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { execFileSync } from "node:child_process";
import OpenAI from "openai";

type BacklogStatus = "pending" | "published" | "failed";

type BacklogItem = {
  keyword: string;
  slug: string;
  category: string;
  status: BacklogStatus;
  createdAt: string;
  publishedAt: string | null;
  errorMessage?: string;
};

type Manifest = {
  version: number;
  outputDirectory: string;
  aspectRatio: string;
  styleGuide: string;
  images: ManifestImage[];
};

type ManifestImage = {
  filename: string;
  altText: string;
  imageTitle: string;
  generationPrompt: string;
  category: string;
  keywordSlug: string;
};

type GeneratedArticle = {
  seoTitle: string;
  metaDescription: string;
  definition: string;
  visualCharacteristics: string[];
  overview: string;
  whatItDoes: string;
  bestUseCases: string[];
  promptExamples: string[];
  relatedKeywords: string[];
  commercialApplications: string[];
  adobeStockPotential: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  articleSections: GeneratedArticleSection[];
  faqs: { question: string; answer: string }[];
  imageAltText: string;
  imageTitle: string;
  imageGenerationPrompt: string;
};

type ArticleSectionType =
  | "definition"
  | "visualCharacteristics"
  | "promptFormula"
  | "bestUseCases"
  | "creativeVariations"
  | "industryApplications"
  | "commonMistakes"
  | "advancedTechniques"
  | "professionalWorkflow"
  | "relatedStyles"
  | "modelSpecificTips";

type ArticleSectionConfig = {
  type: ArticleSectionType;
  title: string;
  guidance: string;
};

type GeneratedArticleSection = {
  type: ArticleSectionType;
  title: string;
  body?: string | null;
  items?: string[] | null;
};

const ROOT = process.cwd();
const BACKLOG_PATH = path.join(ROOT, "content", "keyword-backlog.json");
const GENERATED_CONTENT_PATH = path.join(ROOT, "content", "generated-keywords.ts");
const IMAGE_MANIFEST_PATH = path.join(ROOT, "content", "image-manifest.json");
const PUBLIC_IMAGE_DIR = path.join(ROOT, "public", "images", "keywords");
const CONTENT_FILES = [
  path.join(ROOT, "content", "keywords.ts"),
  path.join(ROOT, "content", "color-keywords.ts"),
  path.join(ROOT, "content", "remaining-keyword-overrides.ts"),
  GENERATED_CONTENT_PATH
];

const MAX_KEYWORDS = Number(process.env.PROMPTATLAS_DAILY_LIMIT ?? "3");
const ARTICLE_MODEL = process.env.PROMPTATLAS_ARTICLE_MODEL ?? "gpt-4.1-mini";
const IMAGE_MODEL = process.env.PROMPTATLAS_IMAGE_MODEL ?? "gpt-image-1";
const IMAGE_SIZE = process.env.PROMPTATLAS_IMAGE_SIZE ?? "1536x1024";
const IMAGE_QUALITY = (process.env.PROMPTATLAS_IMAGE_QUALITY ?? "medium") as
  | "auto"
  | "low"
  | "medium"
  | "high"
  | "standard"
  | "hd";

const ARTICLE_SECTION_POOL: ArticleSectionConfig[] = [
  {
    type: "definition",
    title: "Definition",
    guidance: "Explain the keyword clearly for beginners, including what it changes in an AI image prompt."
  },
  {
    type: "visualCharacteristics",
    title: "Visual Characteristics",
    guidance: "List observable traits a reader should expect to see in generated images."
  },
  {
    type: "promptFormula",
    title: "Prompt Formula",
    guidance: "Show reusable prompt-building patterns and phrase combinations for this keyword."
  },
  {
    type: "bestUseCases",
    title: "Best Use Cases",
    guidance: "List practical image types, buyer needs, or design scenarios where this keyword performs well."
  },
  {
    type: "creativeVariations",
    title: "Creative Variations",
    guidance: "Suggest style, lighting, composition, color, or subject variations that reduce repetitive outputs."
  },
  {
    type: "industryApplications",
    title: "Industry Applications",
    guidance: "Connect the keyword to commercial fields such as advertising, editorial, ecommerce, interiors, or social content."
  },
  {
    type: "commonMistakes",
    title: "Common Mistakes",
    guidance: "Explain typical prompt mistakes and how to avoid muddy, generic, unrealistic, or overdone results."
  },
  {
    type: "advancedTechniques",
    title: "Advanced Techniques",
    guidance: "Give more nuanced combinations, constraints, and refinements for experienced prompt writers."
  },
  {
    type: "professionalWorkflow",
    title: "Professional Workflow",
    guidance: "Describe a concise workflow for briefing, generating, selecting, and refining usable images."
  },
  {
    type: "relatedStyles",
    title: "Related Styles",
    guidance: "Name compatible styles, adjacent visual directions, and nearby PromptAtlas keywords."
  },
  {
    type: "modelSpecificTips",
    title: "Model-Specific Tips",
    guidance: "Give portable tips for modern image models without depending on one provider or fragile syntax."
  }
];

loadEnvFiles([".env.local", ".env"]);

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required for daily content generation.");
  }

  const backlog = readJson<BacklogItem[]>(BACKLOG_PATH);
  const manifest = readJson<Manifest>(IMAGE_MANIFEST_PATH);
  const existingSlugs = getExistingSlugs(manifest);
  const existingKeywords = getExistingKeywordTitles();

  const selected = backlog
    .filter((item) => item.status === "pending")
    .filter((item) => !existingSlugs.has(item.slug))
    .filter((item) => !existingKeywords.has(item.keyword.toLowerCase()))
    .slice(0, Math.max(1, Math.min(3, MAX_KEYWORDS)));

  if (selected.length === 0) {
    console.log("No pending, non-duplicate backlog keywords to generate.");
    return;
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const generatedEntries: string[] = [];
  const generatedKeywords: string[] = [];
  let failureCount = 0;

  for (const item of selected) {
    try {
      console.log(`[content] generating ${item.keyword} (${item.slug})`);
      const article = await generateArticle(client, item, manifest);
      validateArticle(article);

      appendManifestImage(manifest, item, article);
      const entry = renderKeywordEntry(item, article);
      generatedEntries.push(entry);

      await generateImageIfMissing(client, item, article);

      item.status = "published";
      item.publishedAt = new Date().toISOString();
      delete item.errorMessage;
      generatedKeywords.push(item.keyword);
      console.log(`[content] generated ${item.keyword}`);
    } catch (error) {
      failureCount += 1;
      item.status = "failed";
      item.errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`[content] failed ${item.keyword}: ${item.errorMessage}`);
    }
  }

  if (generatedEntries.length > 0) {
    appendGeneratedKeywords(generatedEntries);
    writeJson(IMAGE_MANIFEST_PATH, manifest);
  }

  writeJson(BACKLOG_PATH, backlog);

  console.log(
    generatedKeywords.length
      ? `Generated keywords: ${generatedKeywords.join(", ")}`
      : "No keywords were generated successfully."
  );

  if (generatedEntries.length > 0) {
    runValidation();
  }

  if (failureCount > 0) {
    throw new Error(`${failureCount} keyword generation attempt(s) failed.`);
  }
}

function loadEnvFiles(fileNames: string[]) {
  for (const fileName of fileNames) {
    const filePath = path.join(ROOT, fileName);
    if (!fs.existsSync(filePath)) {
      continue;
    }

    for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
        continue;
      }

      const [key, ...valueParts] = trimmed.split("=");
      if (!process.env[key]) {
        process.env[key] = valueParts.join("=").replace(/^['"]|['"]$/g, "");
      }
    }
  }
}

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function writeJson(filePath: string, value: unknown) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function getExistingSlugs(manifest: Manifest) {
  const slugs = new Set(manifest.images.map((image) => image.keywordSlug));
  for (const filePath of CONTENT_FILES) {
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const text = fs.readFileSync(filePath, "utf8");
    for (const match of text.matchAll(/keywordHero\("([^"]+)"/g)) {
      slugs.add(match[1]);
    }
    for (const match of text.matchAll(/slug:\s*"([^"]+)"/g)) {
      slugs.add(match[1]);
    }
  }
  return slugs;
}

function getExistingKeywordTitles() {
  const titles = new Set<string>();
  for (const filePath of CONTENT_FILES) {
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const text = fs.readFileSync(filePath, "utf8");
    for (const match of text.matchAll(/title:\s*"([^"]+)"/g)) {
      titles.add(match[1].toLowerCase());
    }
  }
  return titles;
}

async function generateArticle(client: OpenAI, item: BacklogItem, manifest: Manifest) {
  const selectedSections = selectArticleSections(item);
  const response = await client.responses.create({
    model: ARTICLE_MODEL,
    input: [
      {
        role: "system",
        content:
          "You write production-ready PromptAtlas keyword articles. Return only valid JSON matching the requested shape. Do not include markdown fences."
      },
      {
        role: "user",
        content: JSON.stringify({
          task: "Generate one SEO-friendly AI image prompt keyword article.",
          keyword: item.keyword,
          category: item.category,
          slug: item.slug,
          styleGuide: manifest.styleGuide,
          articleStructure: {
            instruction:
              "Write articleSections using exactly these selected section types and titles, in this order. Each section should be useful on its own, avoid repeated phrasing from other sections, and add concrete prompt-writing value. Use either an 80-140 word body, 3-5 specific bullets, or both when the section needs examples.",
            selectedSections
          },
          requiredShape: {
            seoTitle: "string, under 70 chars",
            metaDescription: "string, 140-160 chars",
            definition: "clear beginner-friendly definition",
            visualCharacteristics: ["3 concise bullets"],
            overview: "120-180 words",
            whatItDoes: "120-180 words",
            bestUseCases: ["3 practical use cases"],
            promptExamples: ["3 specific prompt examples"],
            relatedKeywords: ["3 existing or likely PromptAtlas keyword names"],
            commercialApplications: ["3 commercial applications"],
            adobeStockPotential: "100-150 words",
            difficulty: "Beginner | Intermediate | Advanced",
            articleSections:
              "5-8 dynamic sections matching articleStructure.selectedSections exactly; each section needs a useful body, items, or both",
            faqs: [{ question: "string", answer: "string" }],
            imageAltText: "descriptive SEO alt text",
            imageTitle: "image title",
            imageGenerationPrompt: "16:9 image generation prompt, no text, no logos"
          }
        })
      }
    ],
    text: {
      format: {
        type: "json_schema",
        name: "promptatlas_article",
        schema: {
          type: "object",
          additionalProperties: false,
          required: [
            "seoTitle",
            "metaDescription",
            "definition",
            "visualCharacteristics",
            "overview",
            "whatItDoes",
            "bestUseCases",
            "promptExamples",
            "relatedKeywords",
            "commercialApplications",
            "adobeStockPotential",
            "difficulty",
            "articleSections",
            "faqs",
            "imageAltText",
            "imageTitle",
            "imageGenerationPrompt"
          ],
          properties: {
            seoTitle: { type: "string" },
            metaDescription: { type: "string" },
            definition: { type: "string" },
            visualCharacteristics: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 3 },
            overview: { type: "string" },
            whatItDoes: { type: "string" },
            bestUseCases: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 3 },
            promptExamples: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 3 },
            relatedKeywords: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 3 },
            commercialApplications: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 3 },
            adobeStockPotential: { type: "string" },
            difficulty: { type: "string", enum: ["Beginner", "Intermediate", "Advanced"] },
            articleSections: {
              type: "array",
              minItems: 5,
              maxItems: 8,
              items: {
                type: "object",
                additionalProperties: false,
                required: ["type", "title", "body", "items"],
                properties: {
                  type: {
                    type: "string",
                    enum: ARTICLE_SECTION_POOL.map((section) => section.type)
                  },
                  title: { type: "string" },
                  body: { type: ["string", "null"] },
                  items: {
                    type: ["array", "null"],
                    items: { type: "string" },
                    minItems: 2,
                    maxItems: 5
                  }
                }
              }
            },
            faqs: {
              type: "array",
              minItems: 2,
              maxItems: 3,
              items: {
                type: "object",
                additionalProperties: false,
                required: ["question", "answer"],
                properties: {
                  question: { type: "string" },
                  answer: { type: "string" }
                }
              }
            },
            imageAltText: { type: "string" },
            imageTitle: { type: "string" },
            imageGenerationPrompt: { type: "string" }
          }
        }
      }
    }
  });

  const article = JSON.parse(response.output_text) as GeneratedArticle;
  return normalizeArticleSections(article, selectedSections);
}

function validateArticle(article: GeneratedArticle) {
  const requiredArrays: Array<keyof GeneratedArticle> = [
    "visualCharacteristics",
    "bestUseCases",
    "promptExamples",
    "relatedKeywords",
    "commercialApplications",
    "articleSections",
    "faqs"
  ];

  for (const key of requiredArrays) {
    const value = article[key];
    if (!Array.isArray(value) || value.length === 0) {
      throw new Error(`Generated article missing ${key}.`);
    }
  }

  if (article.articleSections.length < 5 || article.articleSections.length > 8) {
    throw new Error("Generated article must include 5-8 dynamic article sections.");
  }

  for (const section of article.articleSections) {
    if (!section.title || (!section.body && !section.items?.length)) {
      throw new Error(`Generated article section ${section.type} is incomplete.`);
    }
  }
}

function selectArticleSections(item: BacklogItem) {
  const requiredTypes: ArticleSectionType[] = ["definition", "promptFormula", "bestUseCases"];
  const sectionCount = 5 + (hashText(`${item.slug}:${item.category}`) % 4);
  const selectedTypes = new Set<ArticleSectionType>(requiredTypes);
  const candidates = ARTICLE_SECTION_POOL.filter((section) => !selectedTypes.has(section.type));
  const offset = hashText(item.keyword) % candidates.length;

  for (let index = 0; selectedTypes.size < sectionCount; index += 1) {
    selectedTypes.add(candidates[(offset + index) % candidates.length].type);
  }

  return ARTICLE_SECTION_POOL.filter((section) => selectedTypes.has(section.type));
}

function normalizeArticleSections(article: GeneratedArticle, selectedSections: ArticleSectionConfig[]) {
  const sectionsByType = new Map(article.articleSections.map((section) => [section.type, section]));

  article.articleSections = selectedSections.map((section) => {
    const generated = sectionsByType.get(section.type);

    return {
      type: section.type,
      title: section.title,
      body: generated?.body ?? undefined,
      items: generated?.items ?? undefined
    };
  });

  return article;
}

function hashText(value: string) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

function appendManifestImage(manifest: Manifest, item: BacklogItem, article: GeneratedArticle) {
  if (manifest.images.some((image) => image.keywordSlug === item.slug)) {
    return;
  }

  manifest.images.push({
    filename: `${item.slug}.png`,
    altText: article.imageAltText,
    imageTitle: article.imageTitle,
    generationPrompt: article.imageGenerationPrompt,
    category: item.category,
    keywordSlug: item.slug
  });
}

async function generateImageIfMissing(client: OpenAI, item: BacklogItem, article: GeneratedArticle) {
  fs.mkdirSync(PUBLIC_IMAGE_DIR, { recursive: true });
  const imagePath = path.join(PUBLIC_IMAGE_DIR, `${item.slug}.png`);
  if (fs.existsSync(imagePath) && fs.statSync(imagePath).size > 0) {
    console.log(`[image] skipped ${item.slug}.png; file already exists`);
    return;
  }

  console.log(`[image] generating ${item.slug}.png`);
  const result = await client.images.generate({
    model: IMAGE_MODEL,
    prompt: article.imageGenerationPrompt,
    size: IMAGE_SIZE as "1024x1024" | "1024x1536" | "1536x1024" | "auto",
    quality: IMAGE_QUALITY,
    n: 1
  });

  const imageBase64 = result.data?.[0]?.b64_json;
  if (!imageBase64) {
    throw new Error("Image response did not include b64_json.");
  }

  fs.writeFileSync(imagePath, Buffer.from(imageBase64, "base64"));
}

function appendGeneratedKeywords(entries: string[]) {
  const current = fs.readFileSync(GENERATED_CONTENT_PATH, "utf8");
  const marker = "export const generatedKeywordSeeds: Keyword[] = [";
  if (!current.includes(marker)) {
    throw new Error("generated-keywords.ts has an unexpected format.");
  }

  const trimmedEntries = entries.map((entry) => indent(entry, 2)).join(",\n");
  const next = current.replace(
    /export const generatedKeywordSeeds: Keyword\[\] = \[[\s\S]*?\];/,
    (match) => {
      const existingBody = match
        .replace(marker, "")
        .replace(/\];\s*$/, "")
        .trim();
      const body = existingBody ? `${existingBody.replace(/,\s*$/, "")},\n${trimmedEntries}` : `\n${trimmedEntries}\n`;
      return `${marker}${body}];`;
    }
  );

  fs.writeFileSync(GENERATED_CONTENT_PATH, next, "utf8");
}

function renderKeywordEntry(item: BacklogItem, article: GeneratedArticle) {
  return `{
  title: ${q(item.keyword)},
  category: ${q(item.category)},
  published: true,
  seoTitle: ${q(article.seoTitle)},
  metaDescription: ${q(article.metaDescription)},
  heroImage: keywordHero(${q(item.slug)}, ${q(backgroundForCategory(item.category))}),
  definition: ${q(article.definition)},
  visualCharacteristics: ${array(article.visualCharacteristics)},
  overview: ${q(article.overview)},
  whatItDoes: ${q(article.whatItDoes)},
  bestUseCases: ${array(article.bestUseCases)},
  relatedKeywords: ${array(article.relatedKeywords)},
  examplePrompt: ${q(article.promptExamples[0])},
  promptExamples: ${array(article.promptExamples)},
  commercialApplications: ${array(article.commercialApplications)},
  adobeStockPotential: ${q(article.adobeStockPotential)},
  difficulty: ${q(article.difficulty)},
  articleSections: ${JSON.stringify(article.articleSections, null, 2)},
  faqs: ${JSON.stringify(article.faqs, null, 2)}
}`;
}

function q(value: string) {
  return JSON.stringify(value);
}

function array(values: string[]) {
  return JSON.stringify(values, null, 2);
}

function indent(value: string, spaces: number) {
  const prefix = " ".repeat(spaces);
  return value
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n");
}

function backgroundForCategory(category: string) {
  const palettes: Record<string, string> = {
    Lighting: "linear-gradient(135deg, #1f2523 0%, #8d6a45 48%, #f3dfb8 100%)",
    Atmosphere: "linear-gradient(135deg, #dfe7e5 0%, #9ca8a3 48%, #5f6967 100%)",
    Composition: "linear-gradient(135deg, #fbfaf7 0%, #e5e0d8 48%, #89968f 100%)",
    Style: "linear-gradient(135deg, #ece7df 0%, #a9b6ad 48%, #4d5652 100%)",
    Color: "linear-gradient(135deg, #d8a365 0%, #9aa982 48%, #6e879f 100%)",
    "Texture & Material": "linear-gradient(135deg, #f1eee8 0%, #b8b0a3 48%, #6f6b63 100%)",
    "Commercial Use": "linear-gradient(135deg, #edf1ee 0%, #c9d2cb 48%, #6f8375 100%)"
  };
  return palettes[category] ?? palettes.Composition;
}

function runValidation() {
  console.log("[validate] npm run images:dry-run");
  execFileSync("npm", ["run", "images:dry-run"], { stdio: "inherit", shell: process.platform === "win32" });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
