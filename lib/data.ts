import { categories } from "@/content/categories";
import { keywords, type KeywordWithSlug } from "@/content/keywords";

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getKeyword(slug: string) {
  return keywords.find((keyword) => keyword.slug === slug);
}

export function getKeywordsByCategory(categorySlug: string) {
  return keywords.filter((keyword) => keyword.categorySlug === categorySlug);
}

export function getRelatedKeywords(titles: string[]) {
  return titles
    .map((title) => keywords.find((keyword) => keyword.title === title))
    .filter((keyword): keyword is KeywordWithSlug => Boolean(keyword))
    .slice(0, 6);
}
