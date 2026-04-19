import { z } from "zod";

export const kontaktSchema = z.object({
  name: z.string().min(2, "Name ist zu kurz."),
  email: z.string().email("Ungültige E-Mail."),
  betreff: z.string().min(3, "Betreff angeben."),
  nachricht: z.string().min(10, "Nachricht zu kurz.").max(4000),
});

export type KontaktInput = z.infer<typeof kontaktSchema>;
