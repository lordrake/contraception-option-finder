export const defaultLocale = "en";

export const locales = ["en", "it"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  it: "Italiano"
};

export const localePrefixes = locales.filter(
  (locale) => locale !== defaultLocale
);

export type LocalePrefix = (typeof localePrefixes)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isLocalePrefix(value: string): value is LocalePrefix {
  return localePrefixes.includes(value as LocalePrefix);
}

export function isLocaleLikeSegment(value: string): boolean {
  return /^[a-z]{2}(?:-[a-z]{2})?$/i.test(value);
}
