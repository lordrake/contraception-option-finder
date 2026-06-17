import { AppLink } from "./link";

const meta = {
  title: "Primitives/Link",
  component: AppLink
};

export default meta;

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <AppLink href="/about">Inline link</AppLink>
      <AppLink href="/about" variant="button">
        Button-style link
      </AppLink>
      <AppLink href="/about" variant="secondary">
        Secondary link
      </AppLink>
      <AppLink external href="https://www.healthdirect.gov.au/">
        External resource
      </AppLink>
    </div>
  );
}
