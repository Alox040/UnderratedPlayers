import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anfragen",
};

export default function AdminAnfragenPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Anfragen</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Platzhalter — Bewerbungen und Vereinsanfragen später hier bündeln.
      </p>
    </div>
  );
}
