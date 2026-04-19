import { NextResponse } from "next/server";

/** Platzhalter-Route für spätere Integration (z. B. CRM, Zapier). */
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Noch nicht angebunden." },
    { status: 501 },
  );
}
