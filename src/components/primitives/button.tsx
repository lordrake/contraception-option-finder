import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/styles";

type ButtonVariant = "primary" | "secondary" | "quiet";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  loadingLabel?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-700 text-white hover:bg-teal-800 disabled:bg-slate-300 disabled:text-slate-600",
  quiet:
    "bg-transparent text-teal-800 hover:bg-teal-50 disabled:text-slate-500",
  secondary:
    "border border-teal-700 bg-white text-teal-800 hover:bg-teal-50 disabled:border-slate-300 disabled:text-slate-500"
};

const sizeClasses: Record<ButtonSize, string> = {
  lg: "px-5 py-3 text-base",
  md: "px-4 py-2 text-sm",
  sm: "px-3 py-1.5 text-sm"
};

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  loadingLabel = "Loading",
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      aria-busy={isLoading || undefined}
      className={cx(
        "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-teal-700 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {isLoading ? <span className="sr-only">{loadingLabel}</span> : null}
      {children as ReactNode}
    </button>
  );
}
