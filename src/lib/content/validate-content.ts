import assert from "node:assert/strict";
import { locales } from "../i18n/locales";
import { routeSlugs } from "../i18n/routing";
import {
  getAllPageContent,
  getPageContent,
  resolveOptionalLocalizedString
} from "./pages";
import { requiredLocalizedStringSchema } from "./schemas";
import { getTranslations } from "./translations";

for (const page of getAllPageContent()) {
  assert.ok(page.id, "Page records include stable IDs.");
  assert.equal(page.contentType, "StandardPage");
}

for (const locale of locales) {
  const translations = getTranslations(locale);

  assert.ok(translations["language.label"]);
  assert.ok(translations["routes.label"]);

  for (const slug of routeSlugs) {
    const page = getPageContent(slug, locale);

    assert.equal(page.locale, locale);
    assert.equal(page.slug, slug);
    assert.ok(page.title);
    assert.ok(page.description);
  }
}

assert.equal(
  requiredLocalizedStringSchema.safeParse({ en: "Only English" }).success,
  false,
  "Required localized fields fail validation when a locale is missing."
);

assert.equal(
  resolveOptionalLocalizedString(
    { en: "Fallback copy" },
    "it",
    "fallback-to-default"
  ),
  "Fallback copy",
  "Optional localized fields can fall back to English."
);

assert.equal(
  resolveOptionalLocalizedString({ en: "Hidden copy" }, "it", "omit"),
  undefined,
  "Optional localized fields can be omitted instead of falling back."
);

console.log("Content validation passed.");
