import React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { TagSphere } from "@/components/atoms";
import Image from "next/image";
import { allSkills as skills } from "@/helpers/skills";
import { shuffle } from "@/helpers/functions";

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
        className="select-none"
        src={`/assets/icons/${textFiltered.toLowerCase()}.svg`}
        width={imageSize}
        height={imageSize}
        alt="Icon Image"
      />
    );
  });

  return <TagSphere radius={radiusSize} className="z-0 md:basis-1/2" texts={skillItems} />;
};

export default AboutImage;
