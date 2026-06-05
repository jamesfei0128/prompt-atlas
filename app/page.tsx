import Image from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { KeywordCard } from "@/components/KeywordCard";
import { getFeaturedKeywords, getRelatedKeywords } from "@/lib/data";

const featured = getFeaturedKeywords();
const heroPreviewKeywords = getRelatedKeywords([
  "Cinematic Lighting",
  "Golden Hour",
  "Soft Light",
  "Moody Lighting"
]);

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              AI prompt encyclopedia
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Explore AI art prompt keywords by category, use case, and commercial potential.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
              PromptAtlas helps creators understand what prompt keywords do, when to use them,
              and how they can support stock, branding, product, and design workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/categories/lighting"
                className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-sage"
              >
                Start browsing
              </Link>
              <Link
                href="/blog"
                className="rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-sage"
              >
                Read guides
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-ink">Featured Keywords</p>
              <span className="text-xs font-medium text-sage">Lighting cluster</span>
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

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Categories</h2>
            <p className="mt-2 text-ink/65">Browse the core building blocks of better prompts.</p>
          </div>
        </div>
        <CategoryGrid />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Featured Keywords</h2>
            <p className="mt-2 text-ink/65">A starting set for image quality, mood, and usefulness.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((keyword) => (
            <KeywordCard key={keyword.slug} keyword={keyword} />
          ))}
        </div>
      </section>
    </>
  );
}
