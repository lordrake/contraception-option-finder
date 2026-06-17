import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/styles";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = "display" | "lg" | "md" | "sm";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
  size?: HeadingSize;
};

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  tone?: "default" | "muted";
};

const headingSizeClasses: Record<HeadingSize, string> = {
  display: "text-4xl font-bold leading-tight text-slate-950",
  lg: "text-3xl font-bold leading-tight text-slate-950",
  md: "text-2xl font-bold leading-snug text-slate-950",
  sm: "text-xl font-bold leading-snug text-slate-950"
};

export function Heading({
  children,
  className,
  level = 2,
  size = level === 1 ? "display" : "md",
  ...props
}: HeadingProps) {
  const Component = `h${level}` as const;

  return (
    <Component className={cx(headingSizeClasses[size], className)} {...props}>
      {children as ReactNode}
    </Component>
  );
}

export function Paragraph({
  children,
  className,
  tone = "default",
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cx(
        "max-w-3xl leading-7",
        tone === "muted" ? "text-slate-600" : "text-slate-700",
        className
      )}
      {...props}
    >
      {children as ReactNode}
    </p>
  );
}
