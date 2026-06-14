import Image from "next/image";
import Link from "next/link";
import type { KeywordWithSlug } from "@/content/keywords";
import { publicImageExists } from "@/lib/images";

type KeywordArticleLayoutProps = {
  keyword: KeywordWithSlug;
  relatedKeywords: KeywordWithSlug[];
};

const defaultHeroBackground =
  "radial-gradient(circle at 18% 22%, #ffffff, transparent 30%), linear-gradient(135deg, #edf1ee, #fbfaf7 50%, #eaded6)";

export function KeywordArticleLayout({ keyword, relatedKeywords }: KeywordArticleLayoutProps) {
  const showImage = publicImageExists(keyword.heroImage?.src);
  const dynamicSections = keyword.articleSections?.filter(
    (section) => section.body || section.items?.length
  );

  return (
    <article className="mx-auto max-w-5xl px-5 py-12">
      <Link href={`/categories/${keyword.categorySlug}`} className="text-sm font-semibold text-sage">
        {keyword.category}
      </Link>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {keyword.title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">{keyword.overview}</p>

      <div
        role="img"
        aria-label={keyword.heroImage?.alt ?? `${keyword.title} hero image placeholder`}
        className="relative mt-9 aspect-[16/9] overflow-hidden rounded-lg border border-line bg-cover bg-center"
        style={{ background: keyword.heroImage?.background ?? defaultHeroBackground }}
      >
        {showImage && keyword.heroImage?.src ? (
          <Image
            src={keyword.heroImage.src}
            alt={keyword.heroImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 896px, calc(100vw - 40px)"
            className="object-cover"
          />
        ) : null}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="space-y-9">
          {dynamicSections?.length ? (
            dynamicSections.map((section) => (
              <Section key={`${section.type}-${section.title}`} title={section.title}>
                {section.body ? <p>{section.body}</p> : null}
                {section.items?.length ? <List items={section.items} /> : null}
              </Section>
            ))
          ) : (
            <>
              {keyword.definition ? (
                <Section title="Definition">
                  <p>{keyword.definition}</p>
                </Section>
              ) : (
                <Section title="Overview">
                  <p>{keyword.overview}</p>
                </Section>
              )}

              {keyword.visualCharacteristics ? (
                <Section title="Visual Characteristics">
                  <List items={keyword.visualCharacteristics} />
                </Section>
              ) : (
                <Section title="What It Does">
                  <p>{keyword.whatItDoes}</p>
                </Section>
              )}

              <Section title="Best Use Cases">
                <List items={keyword.bestUseCases} />
              </Section>

              {keyword.promptExamples ? (
                <Section title="Prompt Examples">
                  <List items={keyword.promptExamples} />
                </Section>
              ) : (
                <Section title="Example Prompt">
                  <div className="rounded-lg border border-line bg-white p-5 text-ink/75">
                    {keyword.examplePrompt}
                  </div>
                </Section>
              )}

              <Section title="Adobe Stock Potential">
                <p>{keyword.adobeStockPotential}</p>
              </Section>
            </>
          )}

          {keyword.faqs ? (
            <Section title="FAQ">
              <div className="space-y-3">
                {keyword.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-md border border-line bg-white px-4 py-3">
                    <h3 className="font-semibold text-ink">{faq.question}</h3>
                    <p className="mt-2 text-ink/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Section>
          ) : null}
        </div>

        <aside className="h-fit rounded-lg border border-line bg-white p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
            Keyword Snapshot
          </h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-ink/45">Category</dt>
              <dd className="mt-1 font-medium text-ink">
                <Link href={`/categories/${keyword.categorySlug}`} className="text-sage hover:text-ink">
                  {keyword.category}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-ink/45">Difficulty Rating</dt>
              <dd className="mt-1 font-medium text-ink">{keyword.difficulty}</dd>
            </div>
          </dl>

          <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
            Related Keywords
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {relatedKeywords.map((item) => (
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

      {relatedKeywords.length > 0 ? (
        <section className="mt-16 border-t border-line pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
                Continue Exploring
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                Related Prompts
              </h2>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedKeywords.map((item) => (
              <Link
                key={item.slug}
                href={`/keywords/${item.slug}`}
                className="group rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-sage hover:shadow-sm"
              >
                <div
                  className="relative mb-4 aspect-[16/9] overflow-hidden rounded-md border border-line bg-cover bg-center"
                  style={{ background: item.heroImage?.background ?? defaultHeroBackground }}
                >
                  {publicImageExists(item.heroImage?.src) && item.heroImage?.src ? (
                    <Image
                      src={item.heroImage.src}
                      alt={item.heroImage.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/65">{item.overview}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
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
