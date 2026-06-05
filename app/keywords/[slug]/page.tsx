import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KeywordArticleLayout } from "@/components/KeywordArticleLayout";
import { getKeyword, getPublishedKeywords, getRelatedKeywords } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedKeywords().map((keyword) => ({ slug: keyword.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const keyword = getKeyword(slug);

  if (!keyword) {
    return {};
  }

  return {
    title: `${keyword.title} AI Art Prompt Keyword`,
    description: keyword.overview,
    openGraph: {
      title: `${keyword.title} AI Art Prompt Keyword`,
      description: keyword.overview,
      type: "article"
    }
  };
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = await params;
  const keyword = getKeyword(slug);

  if (!keyword) {
    notFound();
  }

  const related = getRelatedKeywords(keyword.relatedKeywords);

  return <KeywordArticleLayout keyword={keyword} relatedKeywords={related} />;
}
