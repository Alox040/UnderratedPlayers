import { z } from "zod";

/** Platzhalter-Schema für spätere Talent-Entitäten (Admin/API). */
export const talentRecordSchema = z.object({
  id: z.string().uuid(),
  displayName: z.string().min(1),
});

export type TalentRecord = z.infer<typeof talentRecordSchema>;
