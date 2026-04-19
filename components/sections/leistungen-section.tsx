import Link from "next/link";
import { leistungen } from "@/content/leistungen";
import { Card } from "@/components/ui/card";

export function LeistungenSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Leistungen
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Von der ersten Sichtung bis zur Entscheidungsunterstützung — modular
            kombinierbar.
          </p>
        </div>
        <Link
          href="/leistungen"
          className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
        >
          Alle Leistungen →
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {leistungen.map((item) => (
          <Card key={item.slug}>
            <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{item.summary}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
