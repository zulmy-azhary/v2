import type { ProjectType } from "@/types";
import { allProjects } from "@/data/projects";
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
      headingTitle={headingTitle ? `${headingTitle}-projects` : "projects"}
      hasLine={hasLine}
      hasDetails={hasDetails}
      headingClassName="lg:grow"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 xl:grid-cols-12">
        {allProjects
          .filter((project) => project.type === type)
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </div>
    </Section>
  );
};

export default Projects;
