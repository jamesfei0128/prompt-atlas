import assert from "node:assert/strict";
import { test } from "node:test";
import { keywordMetadata } from "../content/keyword-metadata.ts";
import { createSearchIndex, normalizeSearchQuery, searchArticles } from "../lib/search.ts";

const index = createSearchIndex(keywordMetadata);
test("exact titles rank first in the real article library", () => {
  for (const title of ["Cinematic Lighting", "Golden Hour", "Product Photography", "Minimalist"]) {
    assert.equal(searchArticles(index, title)[0].article.title, title);
  }
});
test("case, punctuation, whitespace, and light aliases find the same guide", () => {
  assert.equal(searchArticles(index, "  CINEMATIC-light!!  ")[0].article.title, "Cinematic Lighting");
});
test("matches article descriptions and use cases, not just titles", () => {
  assert(searchArticles(index, "wellness").some(({ article }) => article.title === "Soft Light"));
});
test("all query terms and title matches outrank incidental mentions", () => {
  const article = (title, overview) => ({ title, slug: title, overview, category: "Style", published: true, bestUseCases: [], relatedKeywords: [] });
  const sample = createSearchIndex([
    article("Portrait", "cinematic cinematic cinematic"),
    article("Cinematic Lighting", "A guide to lighting portraits"),
    article("Unrelated", "cinematic lighting ".repeat(100))
  ]);
  assert.equal(searchArticles(sample, "cinematic lighting")[0].article.title, "Cinematic Lighting");
});
test("unpublished articles cannot appear", () => {
  const hidden = { ...keywordMetadata[0], published: false, title: "Hidden sentinel" };
  assert.deepEqual(searchArticles(createSearchIndex([hidden]), "sentinel"), []);
});
test("empty, punctuation-only, stop-word-only, and unknown searches return no results", () => {
  for (const query of ["", "   ", "!!!", "the and for", "zxqvnonexistent987"]) {
    assert.deepEqual(searchArticles(index, query), []);
  }
});
test("searches are deterministic and do not mutate the library", () => {
  const titles = keywordMetadata.map((article) => article.title);
  assert.deepEqual(searchArticles(index, "warm color"), searchArticles(index, "warm color"));
  assert.deepEqual(keywordMetadata.map((article) => article.title), titles);
});
test("query length is bounded", () => {
  assert.equal(normalizeSearchQuery("a".repeat(1000)).length, 160);
  assert.equal(normalizeSearchQuery("  golden   hour "), "golden hour");
});
