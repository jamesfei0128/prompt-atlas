import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/CategoryGrid";
import { KeywordCard } from "@/components/KeywordCard";
import { categories } from "@/content/categories";
import {
  getCategory,
  getKeywordsByCategory,
  getPopularKeywordsByCategory,
  getRelatedCategories
} from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} Prompt Keywords and AI Image Prompt Guide`,
    description: `${category.description} Learn when to use this category, how it improves prompts, and which keywords to explore first.`,
    alternates: {
      canonical: `/categories/${category.slug}`
    },
    openGraph: {
      title: `${category.title} Prompt Keywords and AI Image Prompt Guide`,
      description: category.description,
      url: `/categories/${category.slug}`,
      siteName: "PromptAtlas",
      type: "website"
    }
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryKeywords = getKeywordsByCategory(category.slug);
  const popularKeywords = getPopularKeywordsByCategory(category.slug);
  const relatedCategories = getRelatedCategories(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Category</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{category.title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70">{category.description}</p>

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-line bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            What {category.title} Prompt Keywords Mean
          </h2>
          <div className="mt-4 space-y-5 leading-7 text-ink/70">
            <div>
              <h3 className="font-semibold text-ink">What this category means</h3>
              <p className="mt-2">{category.guide.meaning}</p>
            </div>
            <div>
              <h3 className="font-semibold text-ink">Why it matters for AI image prompting</h3>
              <p className="mt-2">{category.guide.whyItMatters}</p>
            </div>
            <div>
              <h3 className="font-semibold text-ink">When to use this category</h3>
              <p className="mt-2">{category.guide.whenToUse}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Prompt Pattern</h2>
          <div className="mt-4 rounded-lg border border-line bg-mist p-5 text-sm leading-7 text-ink/75">
            {category.guide.promptPattern}
          </div>
          <p className="mt-4 text-sm leading-6 text-ink/60">
            Use this as a starting structure, then swap in specific keywords from the category below.
          </p>
        </div>
      </section>

      {popularKeywords.length > 0 ? (
        <section className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
                Start Here
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                Popular Keywords in this Category
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularKeywords.map((keyword) => (
              <KeywordCard key={keyword.slug} keyword={keyword} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-14 grid gap-4 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            How to Use This Category
          </h2>
          <ul className="mt-5 grid gap-3">
            {category.howToUse.map((tip) => (
              <li key={tip} className="rounded-md border border-line bg-white px-4 py-3 leading-7 text-ink/70">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {relatedCategories.length > 0 ? (
          <aside className="h-fit rounded-lg border border-line bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
              Related Categories
            </h2>
            <div className="mt-4 grid gap-3">
              {relatedCategories.map((relatedCategory) => (
                <Link
                  key={relatedCategory.slug}
                  href={`/categories/${relatedCategory.slug}`}
                  className="rounded-md border border-line bg-paper px-4 py-3 transition hover:border-sage hover:bg-mist"
                >
                  <h3 className="font-semibold text-ink">{relatedCategory.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/60">{relatedCategory.description}</p>
                </Link>
              ))}
            </div>
          </aside>
        ) : null}
      </section>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          All {category.title} Keywords
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-ink/65">
          Browse the full set of published PromptAtlas keywords in this topic area.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryKeywords.map((keyword) => (
          <KeywordCard key={keyword.slug} keyword={keyword} />
        ))}
        </div>
      </section>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-ink">All Categories</h2>
        <CategoryGrid />
      </section>
    </div>
  );
}
