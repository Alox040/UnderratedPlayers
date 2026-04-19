import { z } from "zod";

export const bewerbungSchema = z.object({
  name: z.string().min(2, "Name ist zu kurz."),
  email: z.string().email("Ungültige E-Mail."),
  geburtsjahr: z.coerce
    .number()
    .int()
    .min(1990, "Bitte plausibles Geburtsjahr.")
    .max(new Date().getFullYear() - 10, "Bitte plausibles Geburtsjahr."),
  position: z.string().min(2, "Position angeben."),
  nachricht: z.string().max(2000).optional().default(""),
});

export type BewerbungInput = z.infer<typeof bewerbungSchema>;
