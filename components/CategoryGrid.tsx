import Link from "next/link";
import { categories } from "@/content/categories";
import { keywords } from "@/content/keywords";

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const count = keywords.filter((keyword) => keyword.category === category.title).length;

        return (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group rounded-lg border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-sage hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-ink">{category.title}</h3>
              <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-sage">
                {count}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/65">{category.description}</p>
            <p className="mt-5 text-sm font-medium text-clay transition group-hover:text-ink">
              Browse keywords
            </p>
          </Link>
        );
      })}
    </div>
  );
}
