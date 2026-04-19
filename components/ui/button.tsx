import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function buttonClassName(
  variant: NonNullable<ButtonProps["variant"]> = "primary",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" &&
      "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:outline-neutral-900",
    variant === "secondary" &&
      "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50",
    variant === "ghost" && "text-neutral-700 hover:bg-neutral-100",
    className,
  );
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return <button className={buttonClassName(variant, className)} {...props} />;
}
