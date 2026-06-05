import Link from "next/link";
import type { KeywordWithSlug } from "@/content/keywords";

export function KeywordCard({ keyword }: { keyword: KeywordWithSlug }) {
  return (
    <Link
      href={`/keywords/${keyword.slug}`}
      className="group rounded-lg border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-sage hover:shadow-sm"
    >
      <div className="mb-4 aspect-[16/9] rounded-md border border-line bg-[linear-gradient(135deg,#edf1ee,#fbfaf7_52%,#eaded6)]" />
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-sage">
          {keyword.category}
        </span>
        <span className="text-xs text-ink/45">{keyword.difficulty}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink">{keyword.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/65">{keyword.overview}</p>
      <p className="mt-4 text-sm font-medium text-clay transition group-hover:text-ink">
        View keyword
      </p>
    </Link>
  );
}
