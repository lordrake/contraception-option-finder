import aboutPage from "../../content/pages/about.json";
import examplePage from "../../content/pages/example.json";
import homePage from "../../content/pages/home.json";
import { defaultLocale, type Locale } from "../i18n/locales";
import { routeSlugs, type RouteSlug } from "../i18n/routing";
import {
  pageContentSchema,
  type OptionalLocalizedString,
  type PageContent,
  type RequiredLocalizedString
} from "./schemas";

type OptionalStringPolicy = "fallback-to-default" | "omit";

const rawPagesBySlug = {
  "": homePage,
  about: aboutPage,
  example: examplePage
} satisfies Record<RouteSlug, unknown>;

const pagesBySlug = routeSlugs.reduce(
  (pages, slug) => {
    pages[slug] = parsePage(slug, rawPagesBySlug[slug]);
    return pages;
  },
  {} as Record<RouteSlug, PageContent>
);

export type LocalizedPageContent = {
  id: string;
  contentType: PageContent["contentType"];
  locale: Locale;
  slug: RouteSlug;
  eyebrow?: string;
  title: string;
  description: string;
  summary?: string;
  blocks: PageContent["blocks"];
};

export function getPageContent(
  slug: RouteSlug,
  locale: Locale
): LocalizedPageContent {
  const page = pagesBySlug[slug];

  return {
    id: page.id,
    contentType: page.contentType,
    locale,
    slug: page.slug as RouteSlug,
    eyebrow: resolveOptionalLocalizedString(page.eyebrow, locale, "fallback-to-default"),
    title: resolveRequiredLocalizedString(page.title, locale),
    description: resolveRequiredLocalizedString(page.description, locale),
    summary: resolveOptionalLocalizedString(page.summary, locale, "fallback-to-default"),
    blocks: page.blocks
  };
}

export function getAllPageContent(): PageContent[] {
  return routeSlugs.map((slug) => pagesBySlug[slug]);
}

export function resolveRequiredLocalizedString(
  field: RequiredLocalizedString,
  locale: Locale
): string {
  const value = field[locale];

  if (!value) {
    throw new Error(`Missing required localized string for locale "${locale}".`);
  }

  return value;
}

export function resolveOptionalLocalizedString(
  field: OptionalLocalizedString | undefined,
  locale: Locale,
  policy: OptionalStringPolicy
): string | undefined {
  if (!field) {
    return undefined;
  }

  return field[locale] ?? (policy === "fallback-to-default" ? field[defaultLocale] : undefined);
}

function parsePage(slug: RouteSlug, rawPage: unknown): PageContent {
  const page = pageContentSchema.parse(rawPage);

  if (page.slug !== slug) {
    throw new Error(
      `Page "${page.id}" declares slug "${page.slug}" but is registered for "${slug}".`
    );
  }

  return page;
}
