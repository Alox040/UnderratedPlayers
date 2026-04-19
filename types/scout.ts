export type ScoutProfile = {
  id: string;
  name: string;
  region: string;
  /** Vereine/Ligen, in denen der Scout aktiv ist */
  focus: string[];
};
