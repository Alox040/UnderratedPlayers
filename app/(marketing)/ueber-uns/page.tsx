import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Team, Ansatz und Werte von EddyAgent.",
};

export default function UeberUnsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Über uns</h1>
      <p className="mt-4 text-neutral-600">
        Platzhalterseite — Inhalt folgt (Team, Mission, Arbeitsweise).
      </p>
    </section>
  );
}
