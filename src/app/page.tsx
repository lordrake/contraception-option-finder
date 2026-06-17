export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
      <section className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-700">
          Foundation
        </p>
        <h1 className="max-w-3xl text-4xl font-bold text-slate-950">
          Contraception Option Finder
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
          This Next.js foundation is ready for the upcoming locale, content,
          component, block, accessibility, and Storybook implementation tasks.
        </p>
      </section>
    </main>
  );
}
