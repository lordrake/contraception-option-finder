import Image, { type ImageProps } from "next/image";
import { cx } from "@/lib/styles";

type InformativeImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  decorative?: false;
};

type DecorativeImageProps = Omit<ImageProps, "alt"> & {
  alt?: "";
  decorative: true;
};

export type AccessibleImageProps = DecorativeImageProps | InformativeImageProps;

export function AccessibleImage(props: AccessibleImageProps) {
  if (props.decorative) {
    const { className, decorative, ...imageProps } = props;
    void decorative;

    return (
      <Image
        alt=""
        className={cx("max-w-full rounded-md", className)}
        {...imageProps}
      />
    );
  }

  const { alt, className, decorative, ...imageProps } = props;
  void decorative;

  return (
    <Image
      alt={alt}
      className={cx("max-w-full rounded-md", className)}
      {...imageProps}
    />
  );
}
