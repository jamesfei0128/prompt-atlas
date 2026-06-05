import { categories } from "@/content/categories";
import { featuredKeywordTitles } from "@/content/featured";
import { keywords, type KeywordWithSlug } from "@/content/keywords";

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getKeyword(slug: string) {
  return getPublishedKeywords().find((keyword) => keyword.slug === slug);
}

export function getKeywordsByCategory(categorySlug: string) {
  return getPublishedKeywords().filter((keyword) => keyword.categorySlug === categorySlug);
}

export function getRelatedKeywords(titles: string[]) {
  return titles
    .map((title) => getPublishedKeywords().find((keyword) => keyword.title === title))
    .filter((keyword): keyword is KeywordWithSlug => Boolean(keyword))
    .slice(0, 6);
}

export function getFeaturedKeywords() {
  return getRelatedKeywords(featuredKeywordTitles);
}

export function getPublishedKeywords() {
  return keywords.filter((keyword) => keyword.published);
}
