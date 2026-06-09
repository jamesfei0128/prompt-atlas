import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KeywordCard } from "@/components/KeywordCard";
import { categories } from "@/content/categories";
import { getPublishedKeywords, getRelatedKeywords } from "@/lib/data";

const title = "Discover the Perfect AI Prompt Style | PromptAtlas";
const description =
  "Browse curated AI prompt categories, styles, and keywords for Midjourney, ChatGPT, Flux, Stable Diffusion, and commercial image creation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "PromptAtlas",
    type: "website"
  }
};

const publishedKeywords = getPublishedKeywords();
const heroPreviewKeywords = getRelatedKeywords([
  "Cinematic Lighting",
  "Golden Hour",
  "Soft Light",
  "Moody Lighting"
]);
const trendingKeywords = getRelatedKeywords([
  "Cinematic Lighting",
  "Golden Hour",
  "Minimalist",
  "Morandi Palette",
  "Product Photography",
  "Luxury Branding"
]);
const latestKeywords = [...publishedKeywords].slice(-6).reverse();

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              AI prompt encyclopedia
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Discover the Perfect AI Prompt Style
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
              Browse curated prompt categories, styles, and keywords for Midjourney, ChatGPT,
              Flux, Stable Diffusion, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#popular-categories"
                className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-sage"
              >
                Explore Categories
              </Link>
              <Link
                href="#trending-keywords"
                className="rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-sage"
              >
                Browse Keywords
              </Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm text-ink/60">
              <div>
                <p className="text-xl font-semibold text-ink">{categories.length}</p>
                <p>Categories</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-ink">{publishedKeywords.length}</p>
                <p>Keyword guides</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-ink">5</p>
                <p>AI tools</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-ink">Prompt style starter kit</p>
              <span className="text-xs font-medium text-sage">Popular picks</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {heroPreviewKeywords.map((keyword) => (
                <Link
                  key={keyword.slug}
                  href={`/keywords/${keyword.slug}`}
                  className="group overflow-hidden rounded-md border border-line bg-paper transition hover:border-sage"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-mist">
                    {keyword.heroImage?.src ? (
                      <Image
                        src={keyword.heroImage.src}
                        alt={keyword.heroImage.alt}
                        width={320}
                        height={180}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    ) : null}
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-medium text-sage">{keyword.category}</p>
                    <h3 className="mt-1 text-sm font-semibold leading-5 text-ink">
                      {keyword.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="popular-categories" className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              Start with structure
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
              Popular Categories
            </h2>
            <p className="mt-3 max-w-2xl text-ink/65">
              Explore the core building blocks behind stronger AI images: light, mood, layout,
              style, color, surfaces, and commercial use cases.
            </p>
          </div>
          <Link href="/categories/lighting" className="text-sm font-semibold text-clay hover:text-ink">
            Browse all categories
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const count = publishedKeywords.filter((keyword) => keyword.category === category.title).length;

            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group rounded-lg border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-sage hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink">{category.title}</h3>
                  <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-sage">
                    {count}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-ink/65">{category.description}</p>
                <p className="mt-5 text-sm font-medium text-clay transition group-hover:text-ink">
                  Explore {category.title}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="trending-keywords" className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
                High-impact terms
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
                Trending Keywords
              </h2>
              <p className="mt-3 max-w-2xl text-ink/65">
                Start with versatile prompt keywords that improve image quality, visual style,
                and commercial usefulness.
              </p>
            </div>
            <Link href="/categories/lighting" className="text-sm font-semibold text-clay hover:text-ink">
              Explore lighting keywords
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trendingKeywords.map((keyword) => (
              <KeywordCard key={keyword.slug} keyword={keyword} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              Recently added
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">Latest Guides</h2>
            <p className="mt-3 max-w-2xl text-ink/65">
              New keyword pages from the PromptAtlas content library, ready for practical AI
              image prompting.
            </p>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-clay hover:text-ink">
            Read prompt guides
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestKeywords.map((keyword) => (
            <KeywordCard key={keyword.slug} keyword={keyword} />
          ))}
        </div>
      </section>
    </>
  );
}
