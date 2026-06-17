import { PrimitiveOverviewPage } from "./primitive-overview-page";
import { AppLink, Heading, Paragraph } from "@/components/primitives";
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
  example: "routes.example",
  overview: "routes.overview"
} satisfies Record<RouteSlug, TranslationKey>;

export function LocalizedPage({ locale, slug }: LocalizedPageProps) {
  const page = getPageContent(slug, locale);
  const translations = getTranslations(locale);

  if (slug === "overview") {
    return <PrimitiveOverviewPage locale={locale} page={page} />;
  }

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
              <Paragraph className="mb-3 text-sm font-semibold uppercase text-teal-700">
                {page.eyebrow}
              </Paragraph>
            ) : null}
            <Heading id="page-title" level={1}>
              {page.title}
            </Heading>
          </div>

          <nav aria-label={translations["language.label"]} className="flex flex-wrap gap-2">
            {locales.map((availableLocale) => (
              <AppLink
                aria-current={availableLocale === locale ? "true" : undefined}
                href={getLocalizedPath(availableLocale, slug)}
                key={availableLocale}
                variant="secondary"
              >
                {localeLabels[availableLocale]}
              </AppLink>
            ))}
          </nav>
        </div>

        <Paragraph className="mt-4 text-lg leading-8">
          {page.description}
        </Paragraph>

        {page.summary ? (
          <Paragraph className="mt-4">
            {page.summary}
          </Paragraph>
        ) : null}

        <nav aria-label={translations["routes.label"]} className="mt-8 flex flex-wrap gap-3">
          {routeSlugs.map((routeSlug) => (
            <AppLink
              aria-current={routeSlug === slug ? "page" : undefined}
              href={getLocalizedPath(locale, routeSlug)}
              key={routeSlug}
              variant="button"
            >
              {translations[routeLabelKeys[routeSlug]]}
            </AppLink>
          ))}
        </nav>
      </section>
    </main>
  );
}
