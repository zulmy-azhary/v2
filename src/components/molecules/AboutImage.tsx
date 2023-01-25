import React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { TagSphere } from "@/components/atoms";
import Image from "next/image";

const items = [
  "TypeScript",
  "JavaScript",
  "ReactJs",
  "NextJs",
  "TailwindCSS",
  "Styled Components",
  "Chakra UI",
  "Material UI",
  "VueJs",
  "Svelte",
  "Framer Motion",
  "Firebase",
  "Figma",
  "VsCode",
  "Vite",
  "Bootstrap",
  "MariaDB",
  "Sass",
];

const shuffle = (array: string[]) => {
  let currentIndex = array.length,
    randomIndex: number;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const AboutImage: React.FC = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const tablet = isTablet ? 270 : 175;
  const size = isTablet ? 50 : 32;

  shuffle(items);

  const texts = items.map((item, i) => {
    const textFiltered = item.split(" ").length > 1 ? item.split(" ").join("-") : item;
    return (
      <Image
        key={i}
        className="select-none"
        src={`/assets/icons/${textFiltered.toLowerCase()}.svg`}
        width={size}
        height={size}
        alt="Icon Image"
      />
    );
  });

  return <TagSphere radius={tablet} className="z-0 md:basis-1/2" texts={texts} />;
};

export default AboutImage;
