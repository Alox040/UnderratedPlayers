import type { Metadata } from "next";
import { KontaktForm } from "@/components/forms/kontakt-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie EddyAgent.",
};

export default function KontaktPage() {
  return (
    <section className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Kontakt</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Allgemeine Anfragen — Antwort in der Regel innerhalb weniger Werktage.
      </p>
      <div className="mt-8">
        <KontaktForm />
      </div>
    </section>
  );
}
