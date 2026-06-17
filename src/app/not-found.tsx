import Link from "next/link";

export default function NotFound() {
  return (
    <main
      aria-labelledby="not-found-title"
      className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-16"
    >
      <section className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="mb-3 text-sm font-semibold uppercase text-teal-700">
          Not found
        </p>
        <h1 id="not-found-title" className="text-4xl font-bold text-slate-950">
          This page could not be found
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          The route may be unavailable, or the language prefix may not be
          supported.
        </p>
        <Link
          className="mt-8 inline-flex rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          href="/"
        >
          Return to English homepage
        </Link>
      </section>
    </main>
  );
}
