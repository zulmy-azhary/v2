import React from "react";
import { Box, Text } from "@/components/atoms";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  items: string[];
}

const SkillCard: React.FC<Props> = ({ title, items, className, ...rest }) => {
  return (
    <Box className={clsx("lg:max-w-[20rem] lg:w-fit h-fit", className)} {...rest}>
      <Box className="h-fit">
        <h4 className="px-4 py-2 xl:text-lg">{title}</h4>
      </Box>
      <Box className="px-3 md:px-4 py-3">
        {items.map((item, i) => (
          <Text
            className="text-sm xl:text-base text-gray font-light before:content-['#'] before:mr-1 before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent"
            key={i}
          >
            {item}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default SkillCard;
