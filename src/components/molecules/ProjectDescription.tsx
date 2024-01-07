import React from "react";
import { Box, ButtonLink, Text } from "@/components/atoms";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  description?: string;
  repoUrl: string;
  liveUrl?: string;
}

const ProjectDescription: React.FC<Props> = (props) => {
  const { description, repoUrl, liveUrl, ...rest } = props;
  return (
    <Box className="flex flex-col gap-y-5 p-3 md:p-5" border="border-b" {...rest}>
      <Text className="text-sm text-gray lg:text-base">
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
