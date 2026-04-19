import type { TalentRecord } from "./schema";

/**
 * Daten-Zugriff für Talente — ohne DB-Anbindung.
 * Später: echte Queries gegen `lib/db`.
 */
export async function listTalente(): Promise<TalentRecord[]> {
  return [];
}
