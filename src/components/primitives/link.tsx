import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/styles";

type LinkVariant = "default" | "button" | "quiet" | "secondary";

export type AppLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    external?: boolean;
    variant?: LinkVariant;
  };

const variantClasses: Record<LinkVariant, string> = {
  button:
    "inline-flex rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800",
  default:
    "font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950",
  quiet: "font-semibold text-slate-700 hover:text-teal-800",
  secondary:
    "inline-flex rounded-md border border-teal-700 px-3 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"
};

export function AppLink({
  children,
  className,
  external = false,
  rel,
  target,
  variant = "default",
  ...props
}: AppLinkProps) {
  const resolvedTarget = external ? target ?? "_blank" : target;
  const resolvedRel = external ? rel ?? "noreferrer" : rel;

  return (
    <Link
      className={cx(
        "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700",
        variantClasses[variant],
        className
      )}
      rel={resolvedRel}
      target={resolvedTarget}
      {...props}
    >
      {children as ReactNode}
    </Link>
  );
}
