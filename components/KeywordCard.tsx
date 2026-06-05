import Image from "next/image";
import Link from "next/link";
import type { KeywordWithSlug } from "@/content/keywords";
import { publicImageExists } from "@/lib/images";

const defaultImageBackground =
  "linear-gradient(135deg, #edf1ee, #fbfaf7 52%, #eaded6)";

export function KeywordCard({ keyword }: { keyword: KeywordWithSlug }) {
  const showImage = publicImageExists(keyword.heroImage?.src);

  return (
    <Link
      href={`/keywords/${keyword.slug}`}
      className="group rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-sage hover:shadow-sm"
    >
      <div
        className="relative mb-4 aspect-[16/9] overflow-hidden rounded-md border border-line bg-cover bg-center"
        style={{ background: keyword.heroImage?.background ?? defaultImageBackground }}
      >
        {showImage && keyword.heroImage?.src ? (
          <Image
            src={keyword.heroImage.src}
            alt={keyword.heroImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-sage">
          {keyword.category}
        </span>
        <span className="text-xs text-ink/45">{keyword.difficulty}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink">{keyword.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/65">{keyword.overview}</p>
      <p className="mt-4 text-sm font-medium text-clay transition group-hover:text-ink">
        View keyword
      </p>
    </Link>
  );
}
