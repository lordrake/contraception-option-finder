import type {
  FieldsetHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from "react";
import { cx } from "@/lib/styles";

type ControlSize = "md" | "lg";

type DescribedByProps = {
  describedBy?: string;
  invalid?: boolean;
};

export type FieldProps = HTMLAttributes<HTMLDivElement>;
export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;
export type HelpTextProps = HTMLAttributes<HTMLParagraphElement>;
export type ErrorTextProps = HTMLAttributes<HTMLParagraphElement>;
export type FieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> &
  DescribedByProps;
export type LegendProps = HTMLAttributes<HTMLLegendElement>;

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
  DescribedByProps & {
    controlSize?: ControlSize;
  };

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  DescribedByProps & {
    controlSize?: ControlSize;
  };

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  DescribedByProps & {
    controlSize?: ControlSize;
  };

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  error?: ReactNode;
  hint?: ReactNode;
  id: string;
  invalid?: boolean;
  label: ReactNode;
};

export type RadioOption = {
  disabled?: boolean;
  hint?: ReactNode;
  id?: string;
  label: ReactNode;
  value: string;
};

export type RadioGroupProps = Omit<FieldsetProps, "children" | "onChange"> & {
  defaultValue?: string;
  error?: ReactNode;
  hint?: ReactNode;
  legend: ReactNode;
  name: string;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  options: RadioOption[];
  value?: string;
};

const baseControlClasses =
  "w-full rounded-md border border-slate-400 bg-white text-slate-950 shadow-sm transition-colors placeholder:text-slate-500 focus:border-teal-800 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-teal-700 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-600";

const controlSizeClasses: Record<ControlSize, string> = {
  lg: "px-4 py-3 text-base",
  md: "px-3 py-2 text-base"
};

export function Field({ children, className, ...props }: FieldProps) {
  return (
    <div className={cx("space-y-2", className)} {...props}>
      {children}
    </div>
  );
}

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label
      className={cx("block text-sm font-semibold text-slate-900", className)}
      {...props}
    >
      {children}
    </label>
  );
}

export function HelpText({ children, className, ...props }: HelpTextProps) {
  return (
    <p className={cx("text-sm leading-6 text-slate-600", className)} {...props}>
      {children}
    </p>
  );
}

export function ErrorText({ children, className, ...props }: ErrorTextProps) {
  return (
    <p className={cx("text-sm font-semibold leading-6 text-red-700", className)} {...props}>
      {children}
    </p>
  );
}

export function Fieldset({
  children,
  className,
  describedBy,
  invalid = false,
  ...props
}: FieldsetProps) {
  return (
    <fieldset
      aria-describedby={describedBy}
      aria-invalid={invalid || undefined}
      className={cx("space-y-3", className)}
      {...props}
    >
      {children}
    </fieldset>
  );
}

export function Legend({ children, className, ...props }: LegendProps) {
  return (
    <legend className={cx("text-sm font-semibold text-slate-900", className)} {...props}>
      {children}
    </legend>
  );
}

export function TextInput({
  className,
  controlSize = "md",
  describedBy,
  invalid = false,
  type = "text",
  ...props
}: TextInputProps) {
  return (
    <input
      aria-describedby={describedBy}
      aria-invalid={invalid || undefined}
      className={cx(
        baseControlClasses,
        controlSizeClasses[controlSize],
        invalid ? "border-red-700" : undefined,
        className
      )}
      type={type}
      {...props}
    />
  );
}

export function Textarea({
  className,
  controlSize = "md",
  describedBy,
  invalid = false,
  rows = 4,
  ...props
}: TextareaProps) {
  return (
    <textarea
      aria-describedby={describedBy}
      aria-invalid={invalid || undefined}
      className={cx(
        baseControlClasses,
        controlSizeClasses[controlSize],
        invalid ? "border-red-700" : undefined,
        className
      )}
      rows={rows}
      {...props}
    />
  );
}

export function Select({
  children,
  className,
  controlSize = "md",
  describedBy,
  invalid = false,
  ...props
}: SelectProps) {
  return (
    <select
      aria-describedby={describedBy}
      aria-invalid={invalid || undefined}
      className={cx(
        baseControlClasses,
        controlSizeClasses[controlSize],
        invalid ? "border-red-700" : undefined,
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Checkbox({
  className,
  disabled,
  error,
  hint,
  id,
  invalid = false,
  label,
  ...props
}: CheckboxProps) {
  const hintId = hint && id ? `${id}-hint` : undefined;
  const errorId = error && id ? `${id}-error` : undefined;

  return (
    <div className={cx("space-y-2", className)}>
      <div className="flex items-start gap-3">
        <input
          aria-describedby={joinIds(hintId, errorId)}
          aria-invalid={invalid || undefined}
          className="mt-1 size-4 rounded border-slate-500 text-teal-700 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-teal-700 disabled:cursor-not-allowed"
          disabled={disabled}
          id={id}
          type="checkbox"
          {...props}
        />
        <Label className={cx(disabled ? "text-slate-500" : undefined)} htmlFor={id}>
          {label}
        </Label>
      </div>
      {hint ? <HelpText id={hintId}>{hint}</HelpText> : null}
      {error ? <ErrorText id={errorId}>{error}</ErrorText> : null}
    </div>
  );
}

export function RadioGroup({
  className,
  defaultValue,
  disabled,
  error,
  hint,
  invalid = false,
  legend,
  name,
  onChange,
  options,
  value,
  ...props
}: RadioGroupProps) {
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;

  return (
    <Fieldset
      className={cx("space-y-3", className)}
      describedBy={joinIds(hintId, errorId)}
      disabled={disabled}
      invalid={invalid}
      {...props}
    >
      <Legend>{legend}</Legend>
      {hint ? <HelpText id={hintId}>{hint}</HelpText> : null}
      <div className="space-y-3">
        {options.map((option) => {
          const optionId = option.id ?? `${name}-${option.value.replace(/[^a-z0-9_-]/gi, "-")}`;
          const optionHintId = option.hint ? `${optionId}-hint` : undefined;

          return (
            <div className="space-y-1" key={option.value}>
              <div className="flex items-start gap-3">
                <input
                  aria-describedby={optionHintId}
                  className="mt-1 size-4 border-slate-500 text-teal-700 focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-teal-700 disabled:cursor-not-allowed"
                  defaultChecked={defaultValue === option.value}
                  disabled={disabled || option.disabled}
                  id={optionId}
                  name={name}
                  onChange={onChange}
                  type="radio"
                  value={option.value}
                  {...(value !== undefined ? { checked: value === option.value } : {})}
                />
                <Label
                  className={cx(
                    disabled || option.disabled ? "text-slate-500" : undefined
                  )}
                  htmlFor={optionId}
                >
                  {option.label}
                </Label>
              </div>
              {option.hint ? <HelpText id={optionHintId}>{option.hint}</HelpText> : null}
            </div>
          );
        })}
      </div>
      {error ? <ErrorText id={errorId}>{error}</ErrorText> : null}
    </Fieldset>
  );
}

function joinIds(...ids: Array<false | string | undefined>): string | undefined {
  const resolvedIds = ids.filter(Boolean);
  return resolvedIds.length > 0 ? resolvedIds.join(" ") : undefined;
}
