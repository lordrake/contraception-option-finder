import { AccessibleImage } from "./image";

const meta = {
  title: "Primitives/Image",
  component: AccessibleImage
};

export default meta;

export function Informative() {
  return (
    <AccessibleImage
      alt="Healthcare professional reviewing information with a patient"
      height={180}
      src="/next.svg"
      width={320}
    />
  );
}

export function Decorative() {
  return (
    <AccessibleImage
      decorative
      height={180}
      src="/vercel.svg"
      width={320}
    />
  );
}
