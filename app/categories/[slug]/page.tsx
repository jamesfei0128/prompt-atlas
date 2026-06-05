import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/CategoryGrid";
import { KeywordCard } from "@/components/KeywordCard";
import { categories } from "@/content/categories";
import { getCategory, getKeywordsByCategory } from "@/lib/data";

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
    title: `${category.title} Prompt Keywords`,
    description: category.description
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryKeywords = getKeywordsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Category</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{category.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">{category.description}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryKeywords.map((keyword) => (
          <KeywordCard key={keyword.slug} keyword={keyword} />
        ))}
      </div>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-ink">All Categories</h2>
        <CategoryGrid />
      </section>
    </div>
  );
}
