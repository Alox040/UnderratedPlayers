import type { KontaktInput } from "./schema";

export type KontaktPayload = KontaktInput;

export type KontaktFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

export const initialKontaktFormState: KontaktFormState = {
  ok: false,
  message: "",
};
