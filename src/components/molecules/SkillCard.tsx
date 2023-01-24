import React from "react";
import { Box, Text } from "@/components/atoms";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  items: string[];
}

const SkillCard: React.FC<Props> = ({ title, items, className, ...rest }) => {
  return (
    <Box className={clsx("max-w-[17rem] h-fit", className)} {...rest}>
      <Box className="h-fit"><h4 className="px-4 py-2">{title}</h4></Box>
      <Box className="px-4 py-3">
        {items.map((item, i) => (
          <Text className="text-sm text-gray font-light" key={i}>
            {item}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default SkillCard;
