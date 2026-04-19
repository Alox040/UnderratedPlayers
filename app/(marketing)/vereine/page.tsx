import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Für Vereine",
  description: "Scouting-Unterstützung und Talentpipeline für Fußballvereine.",
};

export default function VereinePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Für Vereine</h1>
      <p className="mt-4 text-neutral-600">
        Platzhalter — später: Anfrageprozess, Referenzen, Pakete.
      </p>
    </section>
  );
}
