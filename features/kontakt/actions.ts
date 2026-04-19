"use server";

import { sendEmail } from "@/lib/email";
import { kontaktSchema } from "./schema";
import type { KontaktFormState } from "./types";

function formDataToRecord(formData: FormData): Record<string, unknown> {
  return {
    name: formData.get("name"),
    email: formData.get("email"),
    betreff: formData.get("betreff"),
    nachricht: formData.get("nachricht"),
  };
}

export async function submitKontakt(
  _prev: KontaktFormState,
  formData: FormData,
): Promise<KontaktFormState> {
  const parsed = kontaktSchema.safeParse(formDataToRecord(formData));

  if (!parsed.success) {
    return {
      ok: false,
      message: "Bitte Eingaben prüfen.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  await sendEmail({
    to: process.env.EMAIL_FROM ?? "team@example.com",
    subject: `Kontakt: ${parsed.data.betreff}`,
    text: JSON.stringify(parsed.data, null, 2),
    replyTo: parsed.data.email,
  });

  return {
    ok: true,
    message: "Nachricht gesendet — wir melden uns bei dir.",
  };
}
