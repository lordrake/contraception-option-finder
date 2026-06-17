import { AppLink, Heading, Paragraph } from "@/components/primitives";

export default function NotFound() {
  return (
    <main
      aria-labelledby="not-found-title"
      className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-16"
    >
      <section className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <Paragraph className="mb-3 text-sm font-semibold uppercase text-teal-700">
          Not found
        </Paragraph>
        <Heading id="not-found-title" level={1}>
          This page could not be found
        </Heading>
        <Paragraph className="mt-4 text-lg leading-8">
          The route may be unavailable, or the language prefix may not be
          supported.
        </Paragraph>
        <AppLink className="mt-8" href="/" variant="button">
          Return to English homepage
        </AppLink>
      </section>
    </main>
  );
}
