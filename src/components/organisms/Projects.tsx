import React from "react";
import { mainProjects } from "@/helpers/projects";
import { ProjectCard, Section } from "@/components/molecules";

const Projects: React.FC = () => {
  return (
    <Section section={"projects"} headingClassName="lg:grow">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 xl:grid-cols-12">
        {mainProjects.map((project, i) => (
          <ProjectCard
            key={i}
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
