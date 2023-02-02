import Image from "next/image";
import type { Project } from "@/types";
import React from "react";
import clsx from "clsx";
import { Box, ButtonLink, Text } from "@/components/atoms";

type Props = Project;

const ProjectCard: React.FC<Props> = (props) => {
  const { src, title, description, techList, liveUrl, repoUrl } = props;

  return (
    <Box className="h-fit w-full md:col-span-3 xl:col-span-4">
      {src && (
        <Box className="overflow-hidden" border="border-b">
          <Image
            className="aspect-video w-auto cursor-pointer select-none object-cover transition-transform duration-500 hover:scale-[1.125]"
            src={src}
            width={512}
            height={512}
            alt={`${title} Image`}
            priority
          />
        </Box>
      )}
      <Box className="px-5 py-2" border="border-b">
        <Text className="lg:text-lg xl:text-xl">{title}</Text>
      </Box>
      <Box className="flex flex-col gap-y-5 p-5" border="border-b">
        <Text className="text-xs text-gray md:text-sm">
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
    </Box>
  );
};

export default ProjectCard;
