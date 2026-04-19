export type AnfrageTyp = "verein" | "talent" | "sonstiges";

export type Anfrage = {
  id: string;
  typ: AnfrageTyp;
  email: string;
  subject: string;
  createdAt: string;
};
