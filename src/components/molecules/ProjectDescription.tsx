import React from "react";
import { Box, ButtonLink, Text } from "@/components/atoms";

interface Props {
  description?: string;
  repoUrl: string;
  liveUrl?: string;
}

const ProjectDescription: React.FC<Props> = ({ description, repoUrl, liveUrl }) => {
  return (
    <Box className="flex flex-col gap-y-5 p-3 md:p-5" border="border-b">
      <Text className="text-sm text-gray">
        {description ?? "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
      </Text>
      <div className="flex flex-row-reverse gap-x-3">
        <ButtonLink href={repoUrl} target={"_blank"} variant="secondary">
          Repo {"<~>"}
        </ButtonLink>
        {liveUrl && (
          <ButtonLink href={liveUrl} target={"_blank"} variant="primary">
            Live {"|>"}
          </ButtonLink>
        )}
      </div>
    </Box>
  );
};

export default ProjectDescription;
