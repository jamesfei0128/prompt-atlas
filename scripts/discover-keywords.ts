import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import OpenAI from "openai";

type BacklogStatus = "pending" | "published" | "failed";

type BacklogItem = {
  keyword: string;
  slug: string;
  category: string;
  status: BacklogStatus;
  createdAt: string;
  publishedAt: string | null;
  source?: string;
  errorMessage?: string;
};

type DiscoveryIdea = {
  keyword: string;
  category: string;
};

type DiscoveryResponse = {
  ideas: DiscoveryIdea[];
};

type Rejection = {
  keyword: string;
  reason: string;
};

const ROOT = process.cwd();
const BACKLOG_PATH = path.join(ROOT, "content", "keyword-backlog.json");
const IMAGE_MANIFEST_PATH = path.join(ROOT, "content", "image-manifest.json");
const CONTENT_FILES = [
  path.join(ROOT, "content", "keywords.ts"),
  path.join(ROOT, "content", "color-keywords.ts"),
  path.join(ROOT, "content", "remaining-keyword-overrides.ts"),
  path.join(ROOT, "content", "generated-keywords.ts")
];

const CATEGORIES = [
  "Lighting",
  "Atmosphere",
  "Composition",
  "Style",
  "Color",
  "Texture & Material",
  "Commercial Use"
] as const;

const MIN_PENDING_KEYWORDS = 100;
const TARGET_PENDING_KEYWORDS = 150;
const MAX_NEW_KEYWORDS_PER_RUN = 75;
const DISCOVERY_MODEL = process.env.PROMPTATLAS_DISCOVERY_MODEL ?? "gpt-4.1-mini";

const STRONG_SINGLE_WORD_TERMS = new Set([
  "bauhaus",
  "bokeh",
  "chiaroscuro",
  "collage",
  "duotone",
  "halftone",
  "isometric",
  "kintsugi",
  "vaporwave"
]);

const DESIGN_RELEVANCE_PATTERN =
  /\b(light|lighting|shadow|glow|ambient|atmosphere|mood|haze|fog|composition|framing|layout|angle|perspective|space|symmetry|color|palette|tone|tones|monochrome|contrast|gradient|texture|surface|material|glass|metal|paper|marble|wood|fabric|concrete|style|aesthetic|design|modern|retro|editorial|product|brand|branding|stock|commercial|presentation|background|typography|type|visual|image|prompt|photography|photo)\b/i;

const LOW_VALUE_PATTERN =
  /\b(random|misc|miscellaneous|thing|things|stuff|nice|beautiful|cool|good|bad|awesome|interesting|various|general)\b/i;

loadEnvFiles([".env.local", ".env"]);

async function main() {
  const backlog = readJson<BacklogItem[]>(BACKLOG_PATH);
  const existingBacklogCount = backlog.length;
  const pendingCount = countPending(backlog);
  const requestedIdeaCount = getRequestedIdeaCount(pendingCount);
  const existing = collectExistingKeywords(backlog);

  console.log(`[discover] existing backlog items: ${existingBacklogCount}`);
  console.log(`[discover] existing pending keyword count: ${pendingCount}`);
  console.log(`[discover] pending keyword threshold: ${MIN_PENDING_KEYWORDS}`);

  if (pendingCount >= MIN_PENDING_KEYWORDS) {
    console.log(
      `Pending keyword count is ${pendingCount}. Threshold is ${MIN_PENDING_KEYWORDS}. Skipping keyword discovery.`
    );
    console.log("[discover] discovery skipped: pending inventory is sufficient");
    logSummary([], [], backlog);
    return;
  }

  console.log("[discover] discovery executed: pending inventory is below threshold");
  console.log(`[discover] target pending keyword count: ${TARGET_PENDING_KEYWORDS}`);
  console.log(`[discover] maximum accepted new keywords per run: ${MAX_NEW_KEYWORDS_PER_RUN}`);
  console.log(`[discover] new keyword ideas requested: ${requestedIdeaCount}`);

  if (!process.env.OPENAI_API_KEY) {
    console.warn("[discover] OPENAI_API_KEY is missing. Skipping keyword discovery.");
    logSummary([], [], backlog);
    return;
  }

  let ideas: DiscoveryIdea[] = [];
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    ideas = await discoverIdeas(client, existing, requestedIdeaCount);
  } catch (error) {
    console.warn(
      `[discover] OpenAI keyword discovery failed. Continuing daily workflow without new keywords. ${formatError(error)}`
    );
    logSummary([], [], backlog);
    return;
  }

  const accepted: BacklogItem[] = [];
  const rejected: Rejection[] = [];
  const seenKeywords = new Set(existing.keywords);
  const seenSlugs = new Set(existing.slugs);

  for (const idea of ideas) {
    if (accepted.length >= MAX_NEW_KEYWORDS_PER_RUN) {
      rejected.push({ keyword: normalizeTitle(idea.keyword ?? "Untitled"), reason: "run cap reached" });
      continue;
    }

    const result = validateIdea(idea, seenKeywords, seenSlugs);
    if (!result.accepted) {
      rejected.push({ keyword: normalizeTitle(idea.keyword ?? "Untitled"), reason: result.reason });
      continue;
    }

    const item: BacklogItem = {
      keyword: normalizeTitle(idea.keyword),
      slug: result.slug,
      category: result.category,
      status: "pending",
      createdAt: new Date().toISOString(),
      publishedAt: null,
      source: "openai-discovery"
    };

    accepted.push(item);
    seenKeywords.add(item.keyword.toLowerCase());
    seenSlugs.add(item.slug);
  }

  if (accepted.length > 0) {
    writeJsonAtomic(BACKLOG_PATH, [...backlog, ...accepted]);
  }

  logSummary(accepted, rejected, [...backlog, ...accepted]);
}

async function discoverIdeas(
  client: OpenAI,
  existing: { keywords: Set<string>; slugs: Set<string> },
  requestedIdeaCount: number
) {
  const existingKeywordSample = Array.from(existing.keywords)
    .sort()
    .slice(0, 160);

  const response = await client.responses.create({
    model: DISCOVERY_MODEL,
    input: [
      {
        role: "system",
        content:
          "You are a careful SEO keyword researcher for PromptAtlas, an AI art prompt keyword encyclopedia. Return only JSON that matches the schema."
      },
      {
        role: "user",
        content: JSON.stringify({
          task: `Generate ${requestedIdeaCount} new PromptAtlas keyword opportunities.`,
          allowedCategories: CATEGORIES,
          existingKeywordsToAvoid: existingKeywordSample,
          requirements: [
            "Use only the allowed categories.",
            "Include a mix of short design terms and long-tail informational keyword phrases.",
            "Prioritize evergreen design, AI image prompting, stock image, and visual search intent.",
            "Avoid duplicates, overly broad terms, random adjectives, celebrities, brands, trends, and non-visual topics.",
            "Most keywords should be 2 to 5 words; none should be longer than 8 words.",
            "Each keyword should have enough depth for a useful educational article."
          ],
          examples: [
            { keyword: "Rembrandt Lighting", category: "Lighting" },
            { keyword: "Muted Luxury Palette", category: "Color" },
            { keyword: "Editorial Product Composition", category: "Composition" },
            { keyword: "Brushed Metal Texture", category: "Texture & Material" },
            { keyword: "Hero Image Background", category: "Commercial Use" }
          ]
        })
      }
    ],
    text: {
      format: {
        type: "json_schema",
        name: "promptatlas_keyword_discovery",
        schema: {
          type: "object",
          additionalProperties: false,
          required: ["ideas"],
          properties: {
            ideas: {
              type: "array",
              minItems: Math.min(20, requestedIdeaCount),
              maxItems: requestedIdeaCount,
              items: {
                type: "object",
                additionalProperties: false,
                required: ["keyword", "category"],
                properties: {
                  keyword: { type: "string" },
                  category: { type: "string", enum: CATEGORIES }
                }
              }
            }
          }
        }
      }
    }
  });

  const parsed = JSON.parse(response.output_text) as DiscoveryResponse;
  return Array.isArray(parsed.ideas) ? parsed.ideas : [];
}

function validateIdea(
  idea: DiscoveryIdea,
  seenKeywords: Set<string>,
  seenSlugs: Set<string>
):
  | { accepted: true; slug: string; category: string }
  | { accepted: false; reason: string } {
  const keyword = normalizeTitle(idea.keyword ?? "");
  const category = normalizeCategory(idea.category ?? "");
  const slug = slugify(keyword);
  const words = keyword.split(/\s+/).filter(Boolean);
  const lowerKeyword = keyword.toLowerCase();

  if (!keyword) {
    return { accepted: false, reason: "empty keyword" };
  }

  if (!category) {
    return { accepted: false, reason: "invalid category" };
  }

  if (seenKeywords.has(lowerKeyword)) {
    return { accepted: false, reason: "duplicate keyword" };
  }

  if (!slug || seenSlugs.has(slug)) {
    return { accepted: false, reason: "duplicate slug" };
  }

  if (words.length < 2 && !STRONG_SINGLE_WORD_TERMS.has(lowerKeyword)) {
    return { accepted: false, reason: "too short" };
  }

  if (words.length > 8) {
    return { accepted: false, reason: "too long" };
  }

  if (LOW_VALUE_PATTERN.test(keyword)) {
    return { accepted: false, reason: "low-value phrase" };
  }

  if (!isRelevantKeyword(keyword, category)) {
    return { accepted: false, reason: "not relevant to PromptAtlas categories" };
  }

  return { accepted: true, slug, category };
}

function isRelevantKeyword(keyword: string, category: string) {
  if (DESIGN_RELEVANCE_PATTERN.test(keyword)) {
    return true;
  }

  if (category === "Style" && /\b(modern|classic|minimalist|maximalist|surreal|abstract|organic|industrial|decor|deco)\b/i.test(keyword)) {
    return true;
  }

  if (category === "Atmosphere" && /\b(calm|cozy|dramatic|cinematic|nostalgic|peaceful|surreal|romantic)\b/i.test(keyword)) {
    return true;
  }

  return STRONG_SINGLE_WORD_TERMS.has(keyword.toLowerCase());
}

function collectExistingKeywords(backlog: BacklogItem[]) {
  const keywords = new Set<string>();
  const slugs = new Set<string>();

  for (const item of backlog) {
    keywords.add(item.keyword.toLowerCase());
    slugs.add(item.slug);
  }

  for (const filePath of CONTENT_FILES) {
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const text = fs.readFileSync(filePath, "utf8");
    for (const match of text.matchAll(/title:\s*"([^"]+)"/g)) {
      const title = normalizeTitle(match[1]);
      keywords.add(title.toLowerCase());
      slugs.add(slugify(title));
    }
    for (const match of text.matchAll(/slug:\s*"([^"]+)"/g)) {
      slugs.add(match[1]);
    }
    for (const match of text.matchAll(/keywordHero\("([^"]+)"/g)) {
      slugs.add(match[1]);
    }
  }

  if (fs.existsSync(IMAGE_MANIFEST_PATH)) {
    const manifest = readJson<{ images?: Array<{ keywordSlug?: string }> }>(IMAGE_MANIFEST_PATH);
    for (const image of manifest.images ?? []) {
      if (image.keywordSlug) {
        slugs.add(image.keywordSlug);
      }
    }
  }

  return { keywords, slugs };
}

function normalizeCategory(category: string) {
  return CATEGORIES.find((candidate) => candidate.toLowerCase() === category.trim().toLowerCase()) ?? "";
}

function normalizeTitle(value: string) {
  return value
    .replace(/[^\w\s&-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function writeJsonAtomic(filePath: string, value: unknown) {
  const tempPath = `${filePath}.tmp`;
  fs.writeFileSync(tempPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  fs.renameSync(tempPath, filePath);
}

function countPending(backlog: BacklogItem[]) {
  return backlog.filter((item) => item.status === "pending").length;
}

function getRequestedIdeaCount(pendingCount: number) {
  const inventoryGap = Math.max(0, TARGET_PENDING_KEYWORDS - pendingCount);
  return Math.min(inventoryGap, MAX_NEW_KEYWORDS_PER_RUN);
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

function logSummary(accepted: BacklogItem[], rejected: Rejection[], backlogAfter: BacklogItem[]) {
  console.log(`[discover] accepted: ${accepted.length}`);
  console.log(`[discover] rejected: ${rejected.length}`);
  console.log(
    accepted.length > 0
      ? `[discover] accepted keywords: ${accepted.map((item) => item.keyword).join(", ")}`
      : "[discover] accepted keywords: none"
  );
  console.log(`[discover] pending keyword count after update: ${backlogAfter.filter((item) => item.status === "pending").length}`);
}

function formatError(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

main().catch((error) => {
  console.warn(`[discover] Unexpected keyword discovery error. Continuing daily workflow. ${formatError(error)}`);
  process.exitCode = 0;
});
