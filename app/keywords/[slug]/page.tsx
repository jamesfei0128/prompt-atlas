import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { keywords } from "@/content/keywords";
import { getKeyword, getRelatedKeywords } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return keywords.map((keyword) => ({ slug: keyword.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const keyword = getKeyword(slug);

  if (!keyword) {
    return {};
  }

  return {
    title: `${keyword.title} AI Art Prompt Keyword`,
    description: keyword.overview
  };
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = await params;
  const keyword = getKeyword(slug);

  if (!keyword) {
    notFound();
  }

  const related = getRelatedKeywords(keyword.relatedKeywords);

  return (
    <article className="mx-auto max-w-5xl px-5 py-12">
      <Link href={`/categories/${keyword.categorySlug}`} className="text-sm font-semibold text-sage">
        {keyword.category}
      </Link>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {keyword.title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">{keyword.overview}</p>

      <div className="mt-9 aspect-[16/7] rounded-lg border border-line bg-[radial-gradient(circle_at_18%_22%,#ffffff,transparent_30%),linear-gradient(135deg,#edf1ee,#fbfaf7_50%,#eaded6)]" />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="space-y-9">
          <Section title="What It Does">
            <p>{keyword.whatItDoes}</p>
          </Section>

          <Section title="Best Use Cases">
            <List items={keyword.bestUseCases} />
          </Section>

          <Section title="Example Prompt">
            <div className="rounded-lg border border-line bg-white p-5 text-ink/75">
              {keyword.examplePrompt}
            </div>
          </Section>

          <Section title="Commercial Applications">
            <List items={keyword.commercialApplications} />
          </Section>

          <Section title="Adobe Stock Potential">
            <p>{keyword.adobeStockPotential}</p>
          </Section>
        </div>

        <aside className="h-fit rounded-lg border border-line bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
            Keyword Snapshot
          </h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-ink/45">Category</dt>
              <dd className="mt-1 font-medium text-ink">{keyword.category}</dd>
            </div>
            <div>
              <dt className="text-ink/45">Difficulty</dt>
              <dd className="mt-1 font-medium text-ink">{keyword.difficulty}</dd>
            </div>
          </dl>

          <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
            Related Keywords
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/keywords/${item.slug}`}
                className="rounded-full bg-mist px-3 py-1.5 text-sm font-medium text-sage transition hover:bg-sage hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <div className="mt-3 leading-7 text-ink/70">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-line bg-white px-4 py-3">
          {item}
        </li>
      ))}
    </ul>
  );
}
