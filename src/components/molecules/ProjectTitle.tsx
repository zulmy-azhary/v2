import React from "react";
import { Box, Text } from "@/components/atoms";

interface Props {
  title: string;
}

const ProjectTitle: React.FC<Props> = ({ title }) => {
  return (
    <Box className="px-3 py-2 md:px-5" border="border-b">
      <Text fontWeight="font-bold" className="text-lg xl:text-xl">
        {title}
      </Text>
    </Box>
  );
};

export default ProjectTitle;
