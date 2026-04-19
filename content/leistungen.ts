export type Leistung = {
  slug: string;
  title: string;
  summary: string;
};

export const leistungen: Leistung[] = [
  {
    slug: "scouting",
    title: "Scouting & Reports",
    summary: "Datenbasierte Spielerbeobachtung mit klaren Empfehlungen.",
  },
  {
    slug: "talentnetzwerk",
    title: "Talentnetzwerk",
    summary: "Zugang zu kuratierten Profilen und Entwicklungspfaden.",
  },
  {
    slug: "vereinsberatung",
    title: "Vereinsberatung",
    summary: "Unterstützung bei Kaderplanung und Transfersichtung.",
  },
];
