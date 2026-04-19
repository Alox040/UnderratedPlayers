import { cn } from "@/lib/utils";
import {
  siteSectionPadding,
  type SiteSectionPaddingKey,
} from "@/lib/site/layout";
import type { HTMLAttributes } from "react";

export type SiteSectionProps = HTMLAttributes<HTMLElement> & {
  padding?: SiteSectionPaddingKey;
};

/**
 * Vertikaler Abschnitts-Wrapper (untere Sektions-Padding-Skala).
 */
export function SiteSection({
  className,
  padding = "default",
  ...props
}: SiteSectionProps) {
  return (
    <section
      className={cn(siteSectionPadding[padding], className)}
      {...props}
    />
  );
}
