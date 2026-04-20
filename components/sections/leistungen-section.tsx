import Link from "next/link";
import { leistungen } from "@/content/leistungen";
import { Card } from "@/components/ui/card";

export function LeistungenSection() {
  return (
    <section className="mx-auto max-w-container px-6 py-16 text-white lg:px-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Leistungen
          </h2>
          <p className="mt-2 max-w-2xl text-text-body">
            Von der ersten Sichtung bis zur Entscheidungsunterstuetzung -
            modular kombinierbar.
          </p>
        </div>
        <Link
          href="/leistungen"
          className="text-sm font-medium text-brand-green hover:text-brand-green/80"
        >
          Alle Leistungen -&gt;
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {leistungen.map((item) => (
          <Card
            key={item.slug}
            className="rounded-xl border-white/5 bg-bg-card p-6 shadow-none"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-text-body">{item.summary}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
