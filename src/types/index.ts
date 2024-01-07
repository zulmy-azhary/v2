import type { IconType } from "react-icons";

export type ProjectType = "main" | "unfinished" | "others";

export type Tech = {
  name: string;
  url: string;
};

export type SocialMedia = {
  iconName: IconType;
  url: string;
};

export type Project = {
  title: string;
  src?: string;
  description?: string;
  techs: Tech[];
  liveUrl?: string;
  repoUrl: string;
  type: ProjectType;
};
