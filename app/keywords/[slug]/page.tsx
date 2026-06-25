import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KeywordArticleLayout } from "@/components/KeywordArticleLayout";
import { getPublishedKeywords } from "@/lib/data";
import {
  getAutomaticRelatedKeywordArticles,
  getKeywordArticle
} from "@/lib/keyword-articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedKeywords().map((keyword) => ({ slug: keyword.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const keyword = getKeywordArticle(slug);

  if (!keyword) {
    return {};
  }

  const title = keyword.seoTitle ?? `${keyword.title} AI Art Prompt Keyword`;
  const description = keyword.metaDescription ?? keyword.overview;
  const url = `/keywords/${keyword.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "PromptAtlas",
      type: "article",
      images: keyword.heroImage?.src
        ? [
            {
              url: keyword.heroImage.src,
              alt: keyword.heroImage.alt
            }
          ]
        : undefined
    }
  };
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = await params;
  const keyword = getKeywordArticle(slug);

  if (!keyword) {
    notFound();
  }

  const related = getAutomaticRelatedKeywordArticles(keyword);

  return <KeywordArticleLayout keyword={keyword} relatedKeywords={related} />;
}
