import { categories } from "@/content/categories";
import { featuredKeywordTitles } from "@/content/featured";
import { keywordMetadata, type KeywordMetadata } from "@/content/keyword-metadata";

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getKeyword(slug: string): KeywordMetadata | undefined {
  return getPublishedKeywords().find((keyword) => keyword.slug === slug);
}

export function getKeywordsByCategory(categorySlug: string): KeywordMetadata[] {
  return getPublishedKeywords().filter((keyword) => keyword.categorySlug === categorySlug);
}

export function getPopularKeywordsByCategory(categorySlug: string, limit = 6): KeywordMetadata[] {
  return getKeywordsByCategory(categorySlug)
    .sort((a, b) => keywordPopularityScore(b) - keywordPopularityScore(a) || a.title.localeCompare(b.title))
    .slice(0, limit);
}

export function getRelatedCategories(categorySlug: string) {
  const category = getCategory(categorySlug);

  if (!category) {
    return [];
  }

  return category.relatedCategories
    .map((relatedSlug) => getCategory(relatedSlug))
    .filter((relatedCategory): relatedCategory is NonNullable<ReturnType<typeof getCategory>> =>
      Boolean(relatedCategory)
    );
}

export function getRelatedKeywords(titles: string[]): KeywordMetadata[] {
  return titles
    .map((title) => getPublishedKeywords().find((keyword) => keyword.title === title))
    .filter((keyword): keyword is KeywordMetadata => Boolean(keyword))
    .slice(0, 6);
}

export function getFeaturedKeywords(): KeywordMetadata[] {
  return getRelatedKeywords(featuredKeywordTitles);
}

export function getPublishedKeywords(): KeywordMetadata[] {
  return keywordMetadata.filter((keyword) => keyword.published);
}

function keywordPopularityScore(keyword: KeywordMetadata) {
  let score = 0;

  if (keyword.heroImage?.src) {
    score += 4;
  }

  if (keyword.hasDefinition) {
    score += 3;
  }

  if (keyword.promptExampleCount) {
    score += 3;
  }

  if (keyword.faqCount) {
    score += 2;
  }

  score += Math.min(keyword.relatedKeywords.length, 4);
  score += Math.min(keyword.bestUseCases.length, 4);

  return score;
}
