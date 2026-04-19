import { cn } from "@/lib/utils";
import {
  siteGridLayout,
  type SiteGridLayoutKey,
} from "@/lib/site/grid";
import type { HTMLAttributes } from "react";

export type SiteGridProps = HTMLAttributes<HTMLDivElement> & {
  layout: SiteGridLayoutKey;
};

/**
 * Semantische Grid-Hülle — Layout-Variante wählen, Inhalt bleibt außen vor.
 */
export function SiteGrid({ className, layout, ...props }: SiteGridProps) {
  return <div className={cn(siteGridLayout[layout], className)} {...props} />;
}
