/**
 * Objekt-/Dateispeicher — Platzhalter für spätere Upload-Pipeline.
 */

export async function putObject(key: string, body: Buffer): Promise<void> {
  void key;
  void body;
  throw new Error("Storage noch nicht konfiguriert.");
}
