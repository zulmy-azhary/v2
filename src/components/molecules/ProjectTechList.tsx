import React from "react";
import clsx from "clsx";
import { Box, Text } from "@/components/atoms";

interface Props {
  techList: string[];
}

const ProjectTechList: React.FC<Props> = ({ techList }) => {
  return (
    <Box
      className={clsx(
        "grid grid-flow-col px-3 py-2 text-gray md:grid-cols-none lg:gap-x-3",
        techList.length < 3 ? "grid-rows-2" : "grid-rows-3"
      )}
      border="border-none"
    >
      {techList.map((tech, i) => (
        <Text itemList className="text-xs md:text-sm" key={i}>
          {tech}
        </Text>
      ))}
    </Box>
  );
};

export default ProjectTechList;
