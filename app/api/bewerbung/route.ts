import { NextResponse } from "next/server";

/**
 * REST-Alternative zur Server Action — für externe Clients oder Webhooks.
 * Persistenz/Versand folgt; aktuell nur struktureller Endpunkt.
 */
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Noch nicht angebunden — bitte Formular über die Website nutzen." },
    { status: 501 },
  );
}
