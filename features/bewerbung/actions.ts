"use server";

import { sendEmail } from "@/lib/email";
import { bewerbungSchema } from "./schema";
import type { BewerbungFormState } from "./types";

function formDataToRecord(formData: FormData): Record<string, unknown> {
  return {
    name: formData.get("name"),
    email: formData.get("email"),
    geburtsjahr: formData.get("geburtsjahr"),
    position: formData.get("position"),
    nachricht: formData.get("nachricht") ?? "",
  };
}

export async function submitBewerbung(
  _prev: BewerbungFormState,
  formData: FormData,
): Promise<BewerbungFormState> {
  const parsed = bewerbungSchema.safeParse(formDataToRecord(formData));

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      ok: false,
      message: "Bitte Eingaben prüfen.",
      fieldErrors,
    };
  }

  await sendEmail({
    to: process.env.EMAIL_FROM ?? "team@example.com",
    subject: `Neue Talentbewerbung: ${parsed.data.name}`,
    text: JSON.stringify(parsed.data, null, 2),
    replyTo: parsed.data.email,
  });

  return {
    ok: true,
    message: "Danke — wir haben deine Angaben erhalten.",
  };
}
