import { Box } from "@/components/atoms";
import Image from "next/image";
import React from "react";
import type { Tech } from "@/types/index";
import { cn } from "@/lib/utils";

interface Props {
  techs: Tech[];
}

const ProjectTechList: React.FC<Props> = ({ techs }) => {
  return (
    <Box
      border="border-none"
      className={cn("grid grid-cols-8 place-items-center gap-x-2 gap-y-2 px-3 py-2 lg:gap-x-3")}
    >
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
    </Box>
  );
};

export default ProjectTechList;
