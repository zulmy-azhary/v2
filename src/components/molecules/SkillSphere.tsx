import Image from "next/image";
import { TagSphere } from "@/components/atoms";
import { allSkills as skills } from "@/data/skills";
import { useMediaQueryList } from "@/hooks/useMediaQuery";

const SkillSphere: React.FC = () => {
  const radiusSize = useMediaQueryList<number>({ isDesktop: 270, isLaptop: 200, isTablet: 300, isMobile: 175 });

  const skillItems = skills.map((skill) => {
    return (
      <div key={skill.name} className="relative h-7 w-7 object-cover md:h-9 md:w-9 lg:h-8 lg:w-8 xl:h-9 xl:w-9">
        <Image className="select-none" src={skill.url} fill priority alt="Skill Icon" />
      </div>
    );
  });

  return (
    <TagSphere
      radius={radiusSize}
      className="z-0 md:basis-1/2 md:self-center lg:basis-2/5 xl:basis-5/12"
      texts={skillItems}
    />
  );
};

export default SkillSphere;
