import type { ProjectType } from "@/types";
import React from "react";
import { allProjects } from "@/helpers/projects";
import { ProjectCard, Section } from "@/components/molecules";

interface Props {
  hasLine?: boolean;
  hasDetails?: boolean;
  headingTitle?: string;
  type: ProjectType;
}

const Projects: React.FC<Props> = ({ hasLine, hasDetails, headingTitle, type }) => {
  return (
    <Section
      section={headingTitle ?? "projects"}
      headingTitle={headingTitle}
      hasLine={hasLine}
      hasDetails={hasDetails}
      headingClassName="lg:grow"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 xl:grid-cols-12">
        {allProjects
          .filter((project) => project.type === type)
          .map((project) => (
            <ProjectCard
              key={project.id}
              src={project.src}
              title={project.title}
              techList={project.techList}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
            />
          ))}
      </div>
    </Section>
  );
};

export default Projects;
