import Link from "next/link";
import { buttonClassName } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b border-neutral-100 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">
            Fußball-Scouting
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Talente finden. Entscheidungen schärfen.
          </h1>
          <p className="text-lg text-neutral-600">
            EddyAgent unterstützt Spieler und Vereine mit professioneller
            Sichtung, klarer Kommunikation und messbarer Qualität.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/talent-bewerben" className={buttonClassName("primary")}>
              Talent bewerben
            </Link>
            <Link href="/vereine" className={buttonClassName("secondary")}>
              Für Vereine
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
