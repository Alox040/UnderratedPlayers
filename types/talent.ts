export type TalentStatus = "neu" | "gesichtet" | "aktiv" | "archiviert";

export type TalentProfile = {
  id: string;
  displayName: string;
  birthYear: number;
  primaryPosition: string;
  status: TalentStatus;
};
