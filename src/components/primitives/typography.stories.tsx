import { Heading, Paragraph } from "./typography";

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
