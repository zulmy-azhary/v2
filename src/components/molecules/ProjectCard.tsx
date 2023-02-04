import { Box } from "@/components/atoms";
import type { Project } from "@/types";
import React from "react";
import { ProjectDescription, ProjectImage, ProjectTechList, ProjectTitle } from ".";

type Props = Project;

const ProjectCard: React.FC<Props> = (props) => {
  const { src, title, description, techList, liveUrl, repoUrl } = props;

  return (
    <Box className="h-fit w-full md:col-span-3 xl:col-span-4">
      <ProjectImage src={src} title={title} />
      <ProjectTitle title={title} />
      <ProjectDescription description={description} liveUrl={liveUrl} repoUrl={repoUrl} />
      <ProjectTechList techList={techList} />
    </Box>
  );
};

export default ProjectCard;
