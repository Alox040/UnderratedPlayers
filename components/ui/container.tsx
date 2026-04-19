import { cn } from "@/lib/utils";
import { siteContainerClass } from "@/lib/site/layout";
import type { HTMLAttributes } from "react";

export type SiteContainerProps = HTMLAttributes<HTMLDivElement>;

/**
 * Horizontale Einordnung gemäß Design-Token (max-width + Padding).
 */
export function SiteContainer({ className, ...props }: SiteContainerProps) {
  return <div className={cn(siteContainerClass, className)} {...props} />;
}
