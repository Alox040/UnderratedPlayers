import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitwirkung",
  description: "Informationen zur Mitwirkung bei Underrated Players.",
};

export default function MitwirkungPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Mitwirkung</h1>
      <p className="mt-4 text-neutral-600">
        Platzhalter fuer Mitwirkungsoptionen, Zusammenarbeit und Beteiligung.
      </p>
    </section>
  );
}
