import React from "react";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const AboutImage: React.FC = () => {
  const items = [
    "TypeScript",
    "JavaScript",
    "ReactJs",
    "NextJs",
    "TailwindCSS",
    "Styled Components",
    "ChakraUI",
    "Material UI",
    "VueJs",
    "Svelte",
    "Framer Motion",
    "Firebase",
    "Figma",
    "VsCode",
    "Vite",
  ];

  const isTablet = useMediaQuery("(min-width: 768px)");
  const tablet = isTablet ? 500 : 320;

  const options = (w: Window & typeof globalThis): TagCloudOptions => ({
    radius: Math.min(tablet, w.innerWidth, w.innerHeight) / 2,
    itemClass: "text-xs md:text-sm xl:text-base bg-gradient-to-br bg-clip-text text-transparent from-primary to-accent",
    maxSpeed: "fast",
    keep: false,
    deceleration: 1000,
    
  });

  return (
    <TagCloud
      options={options}
      onClickOptions={{ passive: true }} className="basis-2/5 relative z-0 flex flex-col place-items-center gap-y-4 w-full"
    >
      {items}
    </TagCloud>
  );
};

export default AboutImage;
