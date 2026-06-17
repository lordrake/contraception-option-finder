import { Button } from "./button";

const meta = {
  title: "Primitives/Button",
  component: Button
};

export default meta;

export function Variants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="quiet">Quiet</Button>
      <Button disabled>Disabled</Button>
      <Button isLoading>Saving</Button>
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">
        Reset
      </Button>
    </div>
  );
}
