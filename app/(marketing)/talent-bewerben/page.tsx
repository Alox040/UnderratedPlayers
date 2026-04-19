import type { Metadata } from "next";
import { BewerbungForm } from "@/components/forms/bewerbung-form";

export const metadata: Metadata = {
  title: "Talent bewerben",
  description: "Bewerbung für das EddyAgent-Talentnetzwerk.",
};

export default function TalentBewerbenPage() {
  return (
    <section className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Talent bewerben</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Kurze Angaben — wir melden uns zeitnah bei passenden Möglichkeiten.
      </p>
      <div className="mt-8">
        <BewerbungForm />
      </div>
    </section>
  );
}
