import type { Project } from "@/types";
import { ProjectDescription, ProjectImage, ProjectTechList, ProjectTitle } from ".";

type Props = Omit<Project, "type"> & React.HtmlHTMLAttributes<HTMLDivElement>;

const ProjectCard: React.FC<Props> = (props) => {
  const { src, title, description, techs, liveUrl, repoUrl, ...rest } = props;

  return (
    <div className="h-fit w-full rounded bg-card md:col-span-3 xl:col-span-4" {...rest}>
      <ProjectImage src={src} title={title} />
      <ProjectTitle title={title} />
      <ProjectTechList techs={techs} />
      <ProjectDescription description={description} liveUrl={liveUrl} repoUrl={repoUrl} />
    </div>
  );
};

export default ProjectCard;
