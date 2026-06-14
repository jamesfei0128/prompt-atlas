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

export function getPopularKeywordsByCategory(categorySlug: string, limit = 6) {
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

export function getRelatedKeywords(titles: string[]) {
  return titles
    .map((title) => getPublishedKeywords().find((keyword) => keyword.title === title))
    .filter((keyword): keyword is KeywordWithSlug => Boolean(keyword))
    .slice(0, 6);
}

export function getAutomaticRelatedKeywords(keyword: KeywordWithSlug, limit = 6) {
  const candidates = getPublishedKeywords().filter((candidate) => candidate.slug !== keyword.slug);
  const sameCategory = candidates.filter((candidate) => candidate.categorySlug === keyword.categorySlug);
  const otherCategories = candidates.filter((candidate) => candidate.categorySlug !== keyword.categorySlug);
  const ranked = [...rankRelatedCandidates(keyword, sameCategory), ...rankRelatedCandidates(keyword, otherCategories)];

  return ranked.slice(0, limit);
}

export function getFeaturedKeywords() {
  return getRelatedKeywords(featuredKeywordTitles);
}

export function getPublishedKeywords() {
  return keywords.filter((keyword) => keyword.published);
}

function rankRelatedCandidates(source: KeywordWithSlug, candidates: KeywordWithSlug[]) {
  return candidates
    .map((candidate) => ({
      candidate,
      score: scoreRelatedKeyword(source, candidate)
    }))
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title))
    .map(({ candidate }) => candidate);
}

function scoreRelatedKeyword(source: KeywordWithSlug, candidate: KeywordWithSlug) {
  const sourceRelatedTitles = normalizeTerms(source.relatedKeywords);
  const candidateRelatedTitles = normalizeTerms(candidate.relatedKeywords);
  const sourceTitle = normalizeTerm(source.title);
  const candidateTitle = normalizeTerm(candidate.title);
  const sourceTitleWords = keywordWords(source.title);
  const candidateTitleWords = keywordWords(candidate.title);
  const sourceTopicWords = keywordWords([
    source.title,
    source.category,
    source.overview,
    source.whatItDoes,
    ...source.bestUseCases
  ].join(" "));
  const candidateTopicWords = keywordWords([
    candidate.title,
    candidate.category,
    candidate.overview,
    candidate.whatItDoes,
    ...candidate.bestUseCases
  ].join(" "));

  let score = source.categorySlug === candidate.categorySlug ? 100 : 0;

  if (sourceRelatedTitles.has(candidateTitle)) {
    score += 40;
  }

  if (candidateRelatedTitles.has(sourceTitle)) {
    score += 35;
  }

  score += intersectionSize(sourceRelatedTitles, candidateRelatedTitles) * 20;
  score += intersectionSize(sourceTitleWords, candidateTitleWords) * 16;
  score += intersectionSize(sourceTopicWords, candidateTopicWords) * 2;

  return score;
}

function normalizeTerms(terms: string[]) {
  return new Set(terms.map(normalizeTerm));
}

function normalizeTerm(term: string) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function keywordWords(text: string) {
  const stopWords = new Set([
    "and",
    "are",
    "for",
    "from",
    "into",
    "that",
    "the",
    "this",
    "with",
    "where",
    "while",
    "your"
  ]);

  return new Set(
    normalizeTerm(text)
      .split(" ")
      .filter((word) => word.length > 2 && !stopWords.has(word))
  );
}

function intersectionSize(first: Set<string>, second: Set<string>) {
  let count = 0;

  first.forEach((value) => {
    if (second.has(value)) {
      count += 1;
    }
  });

  return count;
}

function keywordPopularityScore(keyword: KeywordWithSlug) {
  let score = 0;

  if (keyword.heroImage?.src) {
    score += 4;
  }

  if (keyword.definition) {
    score += 3;
  }

  if (keyword.promptExamples?.length) {
    score += 3;
  }

  if (keyword.faqs?.length) {
    score += 2;
  }

  score += Math.min(keyword.relatedKeywords.length, 4);
  score += Math.min(keyword.bestUseCases.length, 4);

  return score;
}
