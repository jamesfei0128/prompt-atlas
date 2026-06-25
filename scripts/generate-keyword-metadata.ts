import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { keywords } from "../content/keywords";

const OUTPUT_PATH = path.join(process.cwd(), "content", "keyword-metadata.ts");

type KeywordMetadata = {
  title: string;
  category: string;
  published?: boolean;
  seoTitle?: string;
  metaDescription?: string;
  heroImage?: {
    src?: string;
    alt: string;
    title?: string;
    background: string;
  };
  overview: string;
  bestUseCases: string[];
  relatedKeywords: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  slug: string;
  categorySlug: string;
  hasDefinition: boolean;
  promptExampleCount: number;
  faqCount: number;
};

const metadata: KeywordMetadata[] = keywords.map((keyword) => ({
  title: keyword.title,
  category: keyword.category,
  published: keyword.published,
  seoTitle: keyword.seoTitle,
  metaDescription: keyword.metaDescription,
  heroImage: keyword.heroImage,
  overview: keyword.overview,
  bestUseCases: keyword.bestUseCases,
  relatedKeywords: keyword.relatedKeywords,
  difficulty: keyword.difficulty,
  slug: keyword.slug,
  categorySlug: keyword.categorySlug,
  hasDefinition: Boolean(keyword.definition),
  promptExampleCount: keyword.promptExamples?.length ?? 0,
  faqCount: keyword.faqs?.length ?? 0
}));

const file = `export type KeywordMetadata = {
  title: string;
  category: string;
  published?: boolean;
  seoTitle?: string;
  metaDescription?: string;
  heroImage?: {
    src?: string;
    alt: string;
    title?: string;
    background: string;
  };
  overview: string;
  bestUseCases: string[];
  relatedKeywords: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  slug: string;
  categorySlug: string;
  hasDefinition: boolean;
  promptExampleCount: number;
  faqCount: number;
};

export const keywordMetadata = ${JSON.stringify(metadata, null, 2)} satisfies KeywordMetadata[];
`;

fs.writeFileSync(OUTPUT_PATH, file, "utf8");
console.log(`Wrote ${metadata.length} keyword metadata entries to ${path.relative(process.cwd(), OUTPUT_PATH)}`);
