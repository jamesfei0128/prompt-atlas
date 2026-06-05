import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { KeywordCard } from "@/components/KeywordCard";
import { keywords } from "@/content/keywords";

const featured = keywords.slice(0, 6);

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
          <div className="aspect-[4/3] rounded-lg border border-line bg-[radial-gradient(circle_at_20%_20%,#ffffff,transparent_32%),linear-gradient(135deg,#dfe9e2,#fbfaf7_45%,#e8d5cc)] p-5">
            <div className="grid h-full grid-cols-2 gap-3">
              {["Lighting", "Style", "Color", "Commercial"].map((label) => (
                <div key={label} className="rounded-md border border-white/70 bg-white/55 p-4">
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <div className="mt-10 h-2 rounded-full bg-sage/30" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-clay/30" />
                </div>
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
