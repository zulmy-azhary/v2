import React from "react";
import { Box, Text } from "@/components/atoms";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<Props> = (props) => {
  const { title, skills, className, ...rest } = props;

  return (
    <Box className={clsx("h-fit lg:w-fit", className)} {...rest}>
      <Box className="h-fit px-4 py-2">
        <h3 className="xl:text-lg">{title}</h3>
      </Box>
      <Box className={clsx("p-3 md:p-4 lg:p-3 xl:p-4", skills.length > 5 && "grid grid-flow-col grid-rows-4")}>
        {skills.map((skill, i) => (
          <Text className="text-sm text-gray xl:text-base" itemList key={i}>
            {skill}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default SkillCard;
