import { NextResponse } from "next/server";

/**
 * Datei-Upload — vorbereitet für spätere Anbindung (z. B. Blob/S3).
 * Keine Upload-Logik im MVP.
 */
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Upload noch nicht konfiguriert." },
    { status: 501 },
  );
}
