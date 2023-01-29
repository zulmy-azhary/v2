import React from "react";
import { Box, ButtonLink, Text } from "@/components/atoms";
import Image from "next/image";
import clsx from "clsx";
import type { Project } from "@/types";

type Props = Project;

const ProjectCard: React.FC<Props> = (props) => {
  const { src, title, description, techList, liveUrl, repoUrl } = props;

  return (
    <Box className="md:col-span-3 xl:col-span-4 w-full h-fit">
      {src && (
        <Box className="overflow-hidden">
          <Image
            className="w-auto select-none aspect-video object-cover hover:scale-[1.125] transition-transform duration-500 cursor-pointer"
            src={src}
            width={512}
            height={512}
            alt={`${title} Image`}
            priority
          />
        </Box>
      )}
      <Box className="px-5 py-2">
        <Text className="text-xl">{title}</Text>
      </Box>
      <Box className="p-5 flex flex-col gap-y-5">
        <Text className="text-gray text-sm">
          {description ?? "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
        </Text>
        <div className="flex gap-x-3 flex-row-reverse">
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
      <Box className={clsx("px-3 py-2 text-gray grid grid-flow-col grid-cols-2 md:grid-cols-none lg:gap-x-3", techList.length < 3 ? "grid-rows-2" : "grid-rows-3")}>
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
