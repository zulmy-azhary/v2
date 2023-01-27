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
    <Box className={clsx("lg:w-fit h-fit", className)} {...rest}>
      <Box className="h-fit">
        <h3 className="px-4 py-2 xl:text-lg">{title}</h3>
      </Box>
      <Box className="p-3 md:p-4 lg:p-3 xl:p-4">
        {skills.map((skill, i) => (
          <Text
            className="text-sm xl:text-base text-gray font-light"
            itemList
            key={i}
          >
            {skill}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default SkillCard;
