import { keywords, type KeywordWithSlug } from "@/content/keywords";

export function getKeywordArticle(slug: string) {
  return getPublishedKeywordArticles().find((keyword) => keyword.slug === slug);
}

export function getPublishedKeywordArticles() {
  return keywords.filter((keyword) => keyword.published);
}

export function getAutomaticRelatedKeywordArticles(keyword: KeywordWithSlug, limit = 6) {
  const candidates = getPublishedKeywordArticles().filter((candidate) => candidate.slug !== keyword.slug);
  const sameCategory = candidates.filter((candidate) => candidate.categorySlug === keyword.categorySlug);
  const otherCategories = candidates.filter((candidate) => candidate.categorySlug !== keyword.categorySlug);
  const ranked = [...rankRelatedCandidates(keyword, sameCategory), ...rankRelatedCandidates(keyword, otherCategories)];

  return ranked.slice(0, limit);
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
