import {
  AccessibleImage,
  AppLink,
  Button,
  Checkbox,
  ErrorText,
  Field,
  HelpText,
  Heading,
  Label,
  Paragraph,
  RadioGroup,
  Select,
  Textarea,
  TextInput
} from "@/components/primitives";
import type { LocalizedPageContent } from "@/lib/content/pages";
import { getTranslations } from "@/lib/content/translations";
import type { TranslationKey } from "@/lib/content/schemas";
import { localeLabels, locales, type Locale } from "@/lib/i18n/locales";
import { getLocalizedPath, routeSlugs, type RouteSlug } from "@/lib/i18n/routing";

type PrimitiveOverviewPageProps = {
  locale: Locale;
  page: LocalizedPageContent;
};

const routeLabelKeys = {
  "": "routes.home",
  about: "routes.about",
  example: "routes.example",
  overview: "routes.overview"
} satisfies Record<RouteSlug, TranslationKey>;

export function PrimitiveOverviewPage({ locale, page }: PrimitiveOverviewPageProps) {
  const translations = getTranslations(locale);

  return (
    <main
      aria-labelledby="page-title"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-12"
      lang={locale}
    >
      <header className="grid gap-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
        <div>
          {page.eyebrow ? (
            <Paragraph className="mb-3 text-sm font-semibold uppercase text-teal-700">
              {page.eyebrow}
            </Paragraph>
          ) : null}
          <Heading id="page-title" level={1}>
            {page.title}
          </Heading>
          <Paragraph className="mt-4 text-lg leading-8">
            {page.description}
          </Paragraph>
          {page.summary ? (
            <Paragraph className="mt-4">
              {page.summary}
            </Paragraph>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <AppLink href="#overview-form" variant="button">
              {translations["overview.actions.start"]}
            </AppLink>
            <AppLink href={getLocalizedPath(locale, "about")}>
              {translations["overview.actions.professional"]}
            </AppLink>
          </div>
        </div>

        <AccessibleImage
          alt={translations["overview.image.alt"]}
          className="w-full border border-teal-100 bg-teal-50"
          height={360}
          priority
          src="/overview.svg"
          width={640}
        />
      </header>

      <section aria-labelledby="overview-actions" className="grid gap-4 md:grid-cols-3">
        <Heading id="overview-actions" level={2} size="lg">
          {translations["overview.actions.heading"]}
        </Heading>
        <AppLink
          className="rounded-md border border-slate-200 bg-white p-5 shadow-sm no-underline hover:border-teal-700"
          href={getLocalizedPath(locale, "example")}
          variant="quiet"
        >
          {translations["overview.actions.compare"]}
        </AppLink>
        <AppLink
          className="rounded-md border border-slate-200 bg-white p-5 shadow-sm no-underline hover:border-teal-700"
          href={getLocalizedPath(locale, "about")}
          variant="quiet"
        >
          {translations["overview.actions.professional"]}
        </AppLink>
      </section>

      <section
        aria-labelledby="overview-form-heading"
        className="max-w-3xl"
        id="overview-form"
      >
        <Heading id="overview-form-heading" level={2} size="lg">
          {translations["overview.form.heading"]}
        </Heading>
        <Paragraph className="mt-3">
          {translations["overview.form.intro"]}
        </Paragraph>

        <form className="mt-6 space-y-5">
          <Field>
            <Label htmlFor="overview-name">{translations["overview.form.name"]}</Label>
            <HelpText id="overview-name-help">
              {translations["overview.form.nameHelp"]}
            </HelpText>
            <TextInput
              describedBy="overview-name-help"
              id="overview-name"
              name="name"
            />
          </Field>

          <Field>
            <Label htmlFor="overview-email">{translations["overview.form.email"]}</Label>
            <HelpText id="overview-email-help">
              {translations["overview.form.emailHelp"]}
            </HelpText>
            <ErrorText id="overview-email-error">
              {translations["overview.form.emailError"]}
            </ErrorText>
            <TextInput
              describedBy="overview-email-help overview-email-error"
              id="overview-email"
              invalid
              name="email"
              type="email"
            />
          </Field>

          <Field>
            <Label htmlFor="overview-topic">{translations["overview.form.topic"]}</Label>
            <Select id="overview-topic" name="topic">
              <option value="">{translations["overview.form.topicPlaceholder"]}</option>
              <option value="access">{translations["overview.form.topicAccess"]}</option>
              <option value="side-effects">
                {translations["overview.form.topicSideEffects"]}
              </option>
            </Select>
          </Field>

          <Field>
            <Label htmlFor="overview-question">
              {translations["overview.form.question"]}
            </Label>
            <Textarea id="overview-question" name="question" />
          </Field>

          <Checkbox
            hint={translations["overview.form.checkboxHelp"]}
            id="overview-updates"
            label={translations["overview.form.checkbox"]}
            name="updates"
          />

          <RadioGroup
            hint={translations["overview.form.contactHelp"]}
            legend={translations["overview.form.contactLegend"]}
            name="overview-contact"
            options={[
              {
                label: translations["overview.form.contactEmail"],
                value: "email"
              },
              {
                label: translations["overview.form.contactPhone"],
                value: "phone"
              }
            ]}
          />

          <div className="flex flex-wrap gap-3">
            <Button type="submit">{translations["overview.form.submit"]}</Button>
            <Button type="reset" variant="secondary">
              {translations["overview.form.reset"]}
            </Button>
          </div>
        </form>
      </section>

      <nav aria-label={translations["language.label"]} className="flex flex-wrap gap-2">
        {locales.map((availableLocale) => (
          <AppLink
            aria-current={availableLocale === locale ? "true" : undefined}
            href={getLocalizedPath(availableLocale, page.slug)}
            key={availableLocale}
            variant="quiet"
          >
            {localeLabels[availableLocale]}
          </AppLink>
        ))}
      </nav>

      <nav aria-label={translations["routes.label"]} className="flex flex-wrap gap-3">
        {routeSlugs.map((routeSlug) => (
          <AppLink
            aria-current={routeSlug === page.slug ? "page" : undefined}
            href={getLocalizedPath(locale, routeSlug)}
            key={routeSlug}
            variant="button"
          >
            {translations[routeLabelKeys[routeSlug]]}
          </AppLink>
        ))}
      </nav>
    </main>
  );
}
