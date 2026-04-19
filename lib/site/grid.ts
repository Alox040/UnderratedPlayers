/**
 * Vorgefertigte Grid-Klassen — nur Darstellung, keine Datenlogik.
 */

export const siteGridLayout = {
  /** Standard-Raster für Karten / Blöcke */
  cards: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
  /** Stats / Kennzahlen (2 → 4 Spalten) */
  stats: "grid gap-4 grid-cols-2 lg:grid-cols-4",
  /** 12-Spalten-Layout (z. B. Content + Sidebar) */
  main12: "grid grid-cols-1 gap-8 xl:grid-cols-12",
  /** Einfaches Zwei-Spalten-Layout ab md */
  split: "grid gap-8 md:grid-cols-2",
} as const;

export type SiteGridLayoutKey = keyof typeof siteGridLayout;
