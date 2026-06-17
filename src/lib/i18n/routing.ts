import {
  defaultLocale,
  isLocaleLikeSegment,
  isLocalePrefix,
  type Locale
} from "./locales";

export const routeSlugs = ["", "overview", "example", "about"] as const;

export type RouteSlug = (typeof routeSlugs)[number];

export type RouteMatch =
  | {
      locale: Locale;
      slug: RouteSlug;
      status: "ok";
    }
  | {
      status: "not-found";
    };

export function slugToSegments(slug: RouteSlug): string[] {
  return slug === "" ? [] : slug.split("/");
}

export function segmentsToSlug(segments?: string[]): string {
  return (segments ?? []).filter(Boolean).join("/");
}

export function isRouteSlug(slug: string): slug is RouteSlug {
  return routeSlugs.includes(slug as RouteSlug);
}

export function getLocalizedPath(locale: Locale, slug: RouteSlug): string {
  const path = slug === "" ? "" : `/${slug}`;
  return locale === defaultLocale ? path || "/" : `/${locale}${path}`;
}

export function resolveUnprefixedRoute(segments?: string[]): RouteMatch {
  const slug = segmentsToSlug(segments);
  const firstSegment = segments?.[0];

  if (firstSegment && (isLocalePrefix(firstSegment) || isLocaleLikeSegment(firstSegment))) {
    return { status: "not-found" };
  }

  if (!isRouteSlug(slug)) {
    return { status: "not-found" };
  }

  return {
    locale: defaultLocale,
    slug,
    status: "ok"
  };
}

export function resolvePrefixedRoute(
  locale: Locale,
  segments?: string[]
): RouteMatch {
  const slug = segmentsToSlug(segments);

  if (!isRouteSlug(slug)) {
    return { status: "not-found" };
  }

  return {
    locale,
    slug,
    status: "ok"
  };
}
