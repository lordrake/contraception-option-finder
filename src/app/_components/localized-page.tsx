import Link from "next/link";
import { getPageContent } from "@/lib/content/pages";
import { getTranslations } from "@/lib/content/translations";
import type { TranslationKey } from "@/lib/content/schemas";
import { localeLabels, locales, type Locale } from "@/lib/i18n/locales";
import { getLocalizedPath, routeSlugs, type RouteSlug } from "@/lib/i18n/routing";

type LocalizedPageProps = {
  locale: Locale;
  slug: RouteSlug;
};

const routeLabelKeys = {
  "": "routes.home",
  about: "routes.about",
  example: "routes.example"
} satisfies Record<RouteSlug, TranslationKey>;

export function LocalizedPage({ locale, slug }: LocalizedPageProps) {
  const page = getPageContent(slug, locale);
  const translations = getTranslations(locale);

  return (
    <main
      aria-labelledby="page-title"
      className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16"
      lang={locale}
    >
      <section className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            {page.eyebrow ? (
              <p className="mb-3 text-sm font-semibold uppercase text-teal-700">
                {page.eyebrow}
              </p>
            ) : null}
            <h1 id="page-title" className="max-w-3xl text-4xl font-bold text-slate-950">
              {page.title}
            </h1>
          </div>

          <nav aria-label={translations["language.label"]} className="flex flex-wrap gap-2">
            {locales.map((availableLocale) => (
              <Link
                aria-current={availableLocale === locale ? "true" : undefined}
                className="rounded-md border border-teal-700 px-3 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"
                href={getLocalizedPath(availableLocale, slug)}
                key={availableLocale}
              >
                {localeLabels[availableLocale]}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
          {page.description}
        </p>

        {page.summary ? (
          <p className="mt-4 max-w-2xl leading-7 text-slate-700">
            {page.summary}
          </p>
        ) : null}

        <nav aria-label={translations["routes.label"]} className="mt-8 flex flex-wrap gap-3">
          {routeSlugs.map((routeSlug) => (
            <Link
              aria-current={routeSlug === slug ? "page" : undefined}
              className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
              href={getLocalizedPath(locale, routeSlug)}
              key={routeSlug}
            >
              {translations[routeLabelKeys[routeSlug]]}
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
