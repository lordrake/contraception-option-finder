import { Heading, Paragraph } from "./typography";
import { getPageContent } from "../../lib/content/pages";

const meta = {
  title: "Primitives/Typography",
  component: Heading
};

export default meta;

export function Headings() {
  return (
    <div className="space-y-4">
      <Heading level={1}>Page heading</Heading>
      <Heading level={2} size="lg">
        Section heading
      </Heading>
      <Heading level={3} size="md">
        Subsection heading
      </Heading>
      <Heading level={4} size="sm">
        Supporting heading
      </Heading>
    </div>
  );
}

export function BodyCopy() {
  return (
    <div className="space-y-3">
      <Paragraph>
        Plain language copy should be readable, scannable, and comfortable at normal zoom levels.
      </Paragraph>
      <Paragraph tone="muted">
        Muted copy keeps supporting information available without lowering contrast below AA expectations.
      </Paragraph>
    </div>
  );
}

export function LocalizedContent() {
  const englishPage = getPageContent("about", "en");
  const italianPage = getPageContent("about", "it");

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {[englishPage, italianPage].map((page) => (
        <section
          aria-labelledby={`localized-${page.locale}`}
          className="space-y-3 rounded-lg border border-slate-200 bg-white p-5"
          key={page.locale}
          lang={page.locale}
        >
          <Paragraph tone="muted">{page.eyebrow}</Paragraph>
          <Heading id={`localized-${page.locale}`} level={2} size="md">
            {page.title}
          </Heading>
          <Paragraph>{page.description}</Paragraph>
        </section>
      ))}
    </div>
  );
}
