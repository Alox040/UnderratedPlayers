/**
 * Gemeinsame Validierungshilfen — bei Bedarf erweitern.
 * Feature-spezifische Schemas liegen unter features/<name>/schema.ts.
 */

export const nonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;
