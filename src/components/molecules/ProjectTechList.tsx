import Image from "next/image";
import type { Tech } from "@/types/index";

interface Props {
  techs: Tech[];
}

const ProjectTechList: React.FC<Props> = ({ techs }) => {
  return (
    <div className="mt-4 flex flex-row place-items-center gap-x-2 gap-y-2 overflow-x-auto p-3 md:p-5 md:pb-0 lg:gap-x-3">
      {techs.map((tech, i) => (
        <Image
          key={i}
          width={32}
          height={32}
          src={tech.url}
          className="h-8 w-8 select-none"
          alt={tech.name}
          title={tech.name}
        />
      ))}
    </div>
  );
};

export default ProjectTechList;
