import { z } from "zod";
import { locales } from "../i18n/locales";

export const translationKeys = [
  "language.label",
  "routes.label",
  "routes.home",
  "routes.example",
  "routes.about"
] as const;

const localeSchema = z.enum(locales);
const translationKeySchema = z.enum(translationKeys);
const contentIdSchema = z
  .string()
  .trim()
  .min(1)
  .regex(/^[a-z0-9-]+$/);
const nonEmptyStringSchema = z.string().trim().min(1);

export const requiredLocalizedStringSchema = z.record(
  localeSchema,
  nonEmptyStringSchema
);

export const optionalLocalizedStringSchema = z.partialRecord(
  localeSchema,
  nonEmptyStringSchema
);

const heroBlockSchema = z
  .object({
    id: contentIdSchema,
    contentType: z.literal("HeroBlock"),
    heading: requiredLocalizedStringSchema,
    body: requiredLocalizedStringSchema
  })
  .strict();

const richTextBlockSchema = z
  .object({
    id: contentIdSchema,
    contentType: z.literal("RichTextBlock"),
    body: requiredLocalizedStringSchema
  })
  .strict();

const imageBlockSchema = z
  .object({
    id: contentIdSchema,
    contentType: z.literal("ImageBlock"),
    src: nonEmptyStringSchema,
    alt: requiredLocalizedStringSchema,
    caption: optionalLocalizedStringSchema.optional()
  })
  .strict();

const callToActionBlockSchema = z
  .object({
    id: contentIdSchema,
    contentType: z.literal("CallToActionBlock"),
    label: requiredLocalizedStringSchema,
    href: nonEmptyStringSchema
  })
  .strict();

const sectionContainerBlockSchema = z
  .object({
    id: contentIdSchema,
    contentType: z.literal("SectionContainerBlock"),
    heading: optionalLocalizedStringSchema.optional(),
    blockIds: z.array(contentIdSchema)
  })
  .strict();

export const contentBlockSchema = z.discriminatedUnion("contentType", [
  heroBlockSchema,
  richTextBlockSchema,
  imageBlockSchema,
  callToActionBlockSchema,
  sectionContainerBlockSchema
]);

export const pageContentSchema = z
  .object({
    id: contentIdSchema,
    contentType: z.literal("StandardPage"),
    slug: z.string(),
    eyebrow: optionalLocalizedStringSchema.optional(),
    title: requiredLocalizedStringSchema,
    description: requiredLocalizedStringSchema,
    summary: optionalLocalizedStringSchema.optional(),
    blocks: z.array(contentBlockSchema).default([])
  })
  .strict();

export const translationDictionarySchema = z
  .object({
    locale: localeSchema,
    messages: z.record(translationKeySchema, nonEmptyStringSchema)
  })
  .strict();

export type TranslationKey = (typeof translationKeys)[number];
export type RequiredLocalizedString = z.infer<typeof requiredLocalizedStringSchema>;
export type OptionalLocalizedString = z.infer<typeof optionalLocalizedStringSchema>;
export type ContentBlock = z.infer<typeof contentBlockSchema>;
export type PageContent = z.infer<typeof pageContentSchema>;
export type TranslationDictionary = z.infer<typeof translationDictionarySchema>;
