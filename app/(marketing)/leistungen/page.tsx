import type { Metadata } from "next";
import { leistungen } from "@/content/leistungen";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Scouting-Leistungen für Talente und Vereine.",
};

export default function LeistungenPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Leistungen</h1>
      <ul className="mt-8 space-y-4 text-neutral-700">
        {leistungen.map((item) => (
          <li key={item.slug}>
            <span className="font-medium text-neutral-900">{item.title}</span>
            {": "}
            {item.summary}
          </li>
        ))}
      </ul>
    </section>
  );
}
