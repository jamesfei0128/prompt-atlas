import type { Metadata } from "next";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "PromptAtlas guides for combining AI art prompt keywords and creating commercial-ready visuals.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "PromptAtlas Blog",
    description: "PromptAtlas guides for combining AI art prompt keywords and creating commercial-ready visuals.",
    url: "/blog",
    siteName: "PromptAtlas",
    type: "website"
  }
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">Guides</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Blog</h1>
      <p className="mt-4 text-lg leading-8 text-ink/70">
        Short practical notes for using prompt keywords with better intent.
      </p>

      <div className="mt-10 divide-y divide-line rounded-lg border border-line bg-white">
        {posts.map((post) => (
          <article key={post.slug} className="p-6">
            <div className="flex flex-wrap gap-3 text-sm text-ink/50">
              <time dateTime={post.date}>{post.date}</time>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{post.title}</h2>
            <p className="mt-3 leading-7 text-ink/65">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
