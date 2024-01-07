import React from "react";
import type { Tech } from "@/types";
import { cn } from "@/lib/utils";
import { Box, Text } from "@/components/atoms";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  skills: Tech[];
}

const SkillCard: React.FC<Props> = (props) => {
  const { title, skills, className, ...rest } = props;

  return (
    <Box className={cn("h-fit lg:w-fit", className)} {...rest}>
      <Box className="h-fit px-4 py-2" border="border-b">
        <h3 className="text-lg font-bold md:text-base lg:text-lg xl:text-xl">{title}</h3>
      </Box>
      <Box
        className={cn("p-3 md:p-4 lg:p-3 xl:p-4", skills.length > 5 && "grid grid-flow-col grid-rows-4")}
        border="border-none"
      >
        {skills.map((skill, i) => (
          <Text className="text-sm text-gray lg:text-base" itemList key={i}>
            {skill.name}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default SkillCard;
