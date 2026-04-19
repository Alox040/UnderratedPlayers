import Link from "next/link";
import { buttonClassName } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-2xl bg-neutral-900 px-8 py-12 text-white md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-neutral-300">
            Ob Talent oder Verein — wir nehmen uns Zeit für eure Situation.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
          <Link href="/kontakt" className={buttonClassName("secondary")}>
            Kontakt aufnehmen
          </Link>
          <Link
            href="/talent-bewerben"
            className={buttonClassName("primary", "bg-white text-neutral-900 hover:bg-neutral-100")}
          >
            Bewerbung starten
          </Link>
        </div>
      </div>
    </section>
  );
}
