export type ProjectType = "main" | "others";

export type Project = {
  id: number;
  title: string;
  src?: string;
  description?: string;
  techList: string[];
  liveUrl?: string;
  repoUrl: string;
  type: ProjectType;
};
