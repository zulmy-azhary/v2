import Image from "next/image";
import React from "react";
import { TagSphere } from "@/components/atoms";
import { allSkills as skills } from "@/data/skills";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SkillSphere: React.FC = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const radiusSize = isTablet ? 270 : 175;
  const imageSize = isTablet ? 48 : 32;

  const skillItems = skills.map((skill) => {
    return (
      <Image
        key={skill.name}
        className="xxl:w-16 w-8 select-none object-contain md:w-10"
        src={skill.url}
        width={imageSize}
        height={imageSize}
        priority
        alt="Skill Icon"
      />
    );
  });

  return <TagSphere radius={radiusSize} className="z-0 md:basis-1/2" texts={skillItems} />;
};

export default SkillSphere;
