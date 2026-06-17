import englishDictionary from "../../content/translations/en.json";
import italianDictionary from "../../content/translations/it.json";
import type { Locale } from "../i18n/locales";
import {
  translationDictionarySchema,
  type TranslationDictionary,
  type TranslationKey
} from "./schemas";

const rawDictionariesByLocale = {
  en: englishDictionary,
  it: italianDictionary
} satisfies Record<Locale, unknown>;

const dictionariesByLocale = {
  en: parseDictionary("en", rawDictionariesByLocale.en),
  it: parseDictionary("it", rawDictionariesByLocale.it)
} satisfies Record<Locale, TranslationDictionary>;

export function getTranslations(locale: Locale): Record<TranslationKey, string> {
  return dictionariesByLocale[locale].messages;
}

function parseDictionary(
  locale: Locale,
  rawDictionary: unknown
): TranslationDictionary {
  const dictionary = translationDictionarySchema.parse(rawDictionary);

  if (dictionary.locale !== locale) {
    throw new Error(
      `Translation dictionary registered for "${locale}" declares "${dictionary.locale}".`
    );
  }

  return dictionary;
}
