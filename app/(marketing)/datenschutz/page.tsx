import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Datenschutz</h1>
      <p className="mt-4 text-neutral-600">
        Platzhalter — Datenschutzerklärung und Verarbeitungszwecke ergänzen.
      </p>
    </section>
  );
}
