import Image from "next/image";
import React from "react";
import { TagSphere } from "@/components/atoms";
import { shuffle } from "@/helpers/functions";
import { allSkills as skills } from "@/helpers/skills";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const AboutImage: React.FC = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const radiusSize = isTablet ? 270 : 175;
  const imageSize = isTablet ? 50 : 32;

  shuffle(skills);

  const skillItems = skills.map((skill, i) => {
    const textFiltered = skill.split(" ").length > 1 ? skill.split(" ").join("-") : skill;
    return (
      <Image
        key={i}
        className="xxl:w-16 w-8 select-none object-contain md:w-10"
        src={`/assets/icons/${textFiltered.toLowerCase()}.svg`}
        width={imageSize}
        height={imageSize}
        priority
        alt="Icon Image"
      />
    );
  });

  return <TagSphere radius={radiusSize} className="z-0 md:basis-1/2" texts={skillItems} />;
};

export default AboutImage;
