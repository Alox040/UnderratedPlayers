import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talente",
};

export default function AdminTalentePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Talente</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Platzhalter — spätere Liste/Detailansichten ohne Logik im MVP.
      </p>
    </div>
  );
}
