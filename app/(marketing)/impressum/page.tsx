import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>
      <p className="mt-4 text-neutral-600">
        Platzhalter — rechtliche Angaben (Anbieter, Kontakt, Register) ergänzen.
      </p>
    </section>
  );
}
