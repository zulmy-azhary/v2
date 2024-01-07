import { Box } from "@/components/atoms";
import type { Project } from "@/types";
import React from "react";
import { ProjectDescription, ProjectImage, ProjectTechList, ProjectTitle } from ".";

type Props = Omit<Project, "type"> & React.HtmlHTMLAttributes<HTMLDivElement>;

const ProjectCard: React.FC<Props> = (props) => {
  const { src, title, description, techs, liveUrl, repoUrl, ...rest } = props;

  return (
    <Box className="h-fit w-full bg-card md:col-span-3 xl:col-span-4" {...rest}>
      <ProjectImage src={src} title={title} />
      <ProjectTitle title={title} />
      <ProjectDescription description={description} liveUrl={liveUrl} repoUrl={repoUrl} />
      <ProjectTechList techs={techs} />
    </Box>
  );
};

export default ProjectCard;
