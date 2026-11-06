import type { Metadata } from "next";
import Link from "next/link";
import { KeywordCard } from "@/components/KeywordCard";
import { getPublishedKeywords } from "@/lib/data";
import { createSearchIndex, normalizeSearchQuery, searchArticles } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search prompt guides",
  description: "Find AI image prompt styles, lighting techniques, colors, and practical keyword guides.",
  robots: { index: false, follow: true }
};

const index = createSearchIndex(getPublishedKeywords());
const pageSize = 24;
const suggestions = ["Cinematic lighting", "Product photography", "Warm colors", "Minimalist"];
const first = (value: string | string[] | undefined) => Array.isArray(value) ? value[0] : value;

export default async function SearchPage({ searchParams }: {
  searchParams: Promise<{ q?: string | string[]; page?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = normalizeSearchQuery(first(params.q) ?? "");
  const results = searchArticles(index, query);
  const pageCount = Math.max(1, Math.ceil(results.length / pageSize));
  const requestedPage = Number(first(params.page) ?? "1");
  const page = Number.isSafeInteger(requestedPage) ? Math.min(pageCount, Math.max(1, requestedPage)) : 1;
  const visible = results.slice((page - 1) * pageSize, page * pageSize);
  const pageUrl = (number: number) => `/search?${new URLSearchParams({ q: query, page: String(number) })}`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Find your next idea</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Search PromptAtlas</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">
        Explore {index.length} guides by style, lighting, mood, or what you want to create.
      </p>
      <form action="/search" method="get" role="search" className="mt-7 max-w-2xl">
        <label htmlFor="guide-search" className="sr-only">Search prompt guides</label>
        <div className="flex flex-col gap-2 rounded-lg border border-line bg-white p-2 shadow-sm sm:flex-row focus-within:border-sage">
          <input id="guide-search" name="q" type="search" defaultValue={query} maxLength={160}
            placeholder="Try cinematic lighting or product photography"
            className="min-w-0 flex-1 rounded-md px-3 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-sage" />
          <button type="submit" className="rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage">Search</button>
        </div>
      </form>

      {query ? (
        <>
          <div className="mb-7 mt-10 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-5">
            <h2 className="text-xl font-semibold text-ink">{results.length} {results.length === 1 ? "guide" : "guides"} for “{query}”</h2>
            {results.length > 0 ? <p className="text-sm text-ink/60">Sorted by relevance</p> : null}
          </div>
          {visible.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map(({ article }) => <KeywordCard key={article.slug} keyword={article} />)}
            </div>
          ) : (
            <div className="rounded-lg border border-line bg-white p-8">
              <h3 className="text-xl font-semibold text-ink">No matching guides yet</h3>
              <p className="mt-3 text-ink/65">Try fewer words, check your spelling, or search for a broader style or technique.</p>
              <Link href="/#popular-categories" className="mt-5 inline-block font-medium text-clay hover:text-ink">Explore categories</Link>
            </div>
          )}
          {pageCount > 1 ? (
            <nav aria-label="Search results pages" className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-6">
              {page > 1 ? <Link href={pageUrl(page - 1)} className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-sage">Previous</Link> : <span />}
              <p className="text-sm text-ink/60">Page {page} of {pageCount}</p>
              {page < pageCount ? <Link href={pageUrl(page + 1)} className="rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-sage">Next</Link> : <span />}
            </nav>
          ) : null}
        </>
      ) : null}

      {!query || results.length === 0 ? (
        <section className="mt-10" aria-labelledby="search-suggestions">
          <h2 id="search-suggestions" className="text-sm font-semibold text-ink/70">Try a popular search</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {suggestions.map((suggestion) => <Link key={suggestion} href={`/search?${new URLSearchParams({ q: suggestion })}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-sage transition hover:border-sage">{suggestion}</Link>)}
          </div>
        </section>
      ) : null}
    </div>
  );
}
