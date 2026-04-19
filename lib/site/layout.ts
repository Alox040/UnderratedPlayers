/**
 * Statische Layout-Klassen für die Site — nur Struktur, keine Laufzeitlogik.
 * Komponenten importieren diese Strings und kombinieren sie mit `cn()`.
 */

/** Entspricht .container-brand in app/globals.css */
export const siteContainerClass = "container-brand";

/** Vertikaler Rhythmus für Sektionen (Spacing-Spezifikation) */
export const siteSectionPadding = {
  default: "pb-20 md:pb-24",
  compact: "pb-12 md:pb-16",
} as const;

export type SiteSectionPaddingKey = keyof typeof siteSectionPadding;
