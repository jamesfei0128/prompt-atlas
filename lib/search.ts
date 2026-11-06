export type SearchArticle = {
  slug: string;
  title: string;
  category: string;
  overview: string;
  published?: boolean;
  seoTitle?: string;
  metaDescription?: string;
  bestUseCases: string[];
  relatedKeywords: string[];
};

const stopWords = new Set(["a", "an", "and", "are", "for", "how", "in", "is", "of", "on", "the", "to", "with"]);
const aliases: Record<string, string> = {
  light: "lighting", lights: "lighting", photo: "photography", photos: "photography",
  photograph: "photography", photographs: "photography", colour: "color", colours: "color", colors: "color"
};

export function normalizeSearchQuery(value: string) {
  return value.trim().replace(/\s+/g, " ").slice(0, 160);
}

function normalize(value: string) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function tokens(value: string) {
  return normalize(value).split(/\s+/).filter(Boolean).filter((word) => !stopWords.has(word))
    .map((word) => aliases[word] ?? word);
}

export function createSearchIndex<T extends SearchArticle>(articles: T[]) {
  return articles.filter((article) => article.published).map((article) => ({
    article,
    title: normalize(article.title),
    fields: [
      { words: tokens(`${article.title} ${article.seoTitle ?? ""}`), weight: 12 },
      { words: tokens(article.relatedKeywords.join(" ")), weight: 4 },
      { words: tokens(article.category), weight: 3 },
      { words: tokens(`${article.overview} ${article.metaDescription ?? ""}`), weight: 2 },
      { words: tokens(article.bestUseCases.join(" ")), weight: 1 }
    ]
  }));
}

export function searchArticles<T extends SearchArticle>(index: ReturnType<typeof createSearchIndex<T>>, query: string) {
  const cleaned = normalizeSearchQuery(query);
  const terms = [...new Set(tokens(cleaned))].slice(0, 12);
  const phrase = normalize(cleaned);
  if (!terms.length) return [];

  const matches = (word: string, term: string) => word === term || (term.length >= 3 && word.startsWith(term));
  const termWeights = terms.map((term) => Math.log(1 + index.length / (1 + index.filter(
    (entry) => entry.fields.some((field) => field.words.some((word) => matches(word, term)))
  ).length)));

  return index.map((entry) => {
    let score = 0;
    let matchedTerms = 0;
    terms.forEach((term, i) => {
      let termScore = 0;
      for (const field of entry.fields) {
        // Cap repeated mentions so long articles cannot overwhelm a title match.
        const count = Math.min(2, field.words.filter((word) => matches(word, term)).length);
        termScore += count * field.weight * termWeights[i];
      }
      if (termScore > 0) matchedTerms += 1;
      score += termScore;
    });
    if (!matchedTerms) return { article: entry.article, score: 0 };
    score *= matchedTerms / terms.length;
    if (matchedTerms === terms.length) score += 40;
    if (entry.title.includes(phrase)) score += 60;
    if (entry.title === phrase) score += 200;
    return { article: entry.article, score };
  }).filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title));
}
