import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn what PromptAtlas is and how it organizes AI art prompt keywords for creators.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About PromptAtlas",
    description: "Learn what PromptAtlas is and how it organizes AI art prompt keywords for creators.",
    url: "/about",
    siteName: "PromptAtlas",
    type: "website"
  }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">About</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">PromptAtlas</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-ink/70">
        <p>
          PromptAtlas is a simple AI art prompt keyword encyclopedia built for creators,
          designers, marketers, and stock contributors.
        </p>
        <p>
          The MVP focuses on clear definitions, practical examples, commercial applications,
          and discoverable category pages. Content is stored in local data files so future
          keyword pages, blog posts, and richer editorial content can be added without
          rewriting page components.
        </p>
      </div>
    </div>
  );
}
