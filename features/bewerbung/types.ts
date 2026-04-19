import type { BewerbungInput } from "./schema";

export type BewerbungPayload = BewerbungInput & {
  /** Quelle der Bewerbung (Web, Empfehlung, …) — später persistieren */
  source?: "web";
};

export type BewerbungFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

export const initialBewerbungFormState: BewerbungFormState = {
  ok: false,
  message: "",
};
