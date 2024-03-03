import Image from "next/image";
import type { Tech } from "@/types/index";
import { useMediaQueryList } from "@/hooks/useMediaQuery";
import { AnimatePresence, type Variants, motion } from "framer-motion";
import React, { useState } from "react";

interface Props {
  techs: Tech[];
}

const ProjectTechList: React.FC<Props> = ({ techs }) => {
  const [isVisible, setVisible] = useState(false);
  const [otherTechs, setOtherTechs] = useState<Tech[]>([]);
  const length = useMediaQueryList<number>({ isDesktop: 7, isLaptop: 9, isTablet: 7, isMobile: 7 });

  const onMouseEnter = () => {
    setOtherTechs(techs.slice(length));
    setVisible(true);
  };

  const onMouseLeave = () => {
    setOtherTechs([]);
    setVisible(false);
  };

  return (
    <div className="relative mt-4 flex flex-row place-items-center gap-x-2 gap-y-2 p-3 md:gap-x-1 md:p-5 md:pb-0 lg:gap-x-2 xl:gap-x-3">
      {techs
        .filter((_, i) => i <= length)
        .map((tech, i) => {
          if (i === length) {
            return (
              <button
                className="grow py-1 hover:bg-black/10"
                key={tech.name}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                ...
              </button>
            );
          }
          return (
            <Image
              key={tech.name}
              width={32}
              height={32}
              src={tech.url}
              className="h-8 w-8 select-none"
              alt={tech.name}
              title={tech.name}
              priority
            />
          );
        })}
      <AnimatePresence mode="wait" initial={false}>
        {isVisible && (
          <motion.ul
            variants={variants}
            initial="initial"
            animate={isVisible ? "enter" : "exit"}
            exit="exit"
            transition={{ duration: 0.25 }}
            className="absolute right-2 top-full flex flex-col place-items-center gap-x-2 gap-y-2 overflow-hidden rounded-md bg-card p-2 shadow-md md:gap-x-1 lg:gap-x-2 xl:gap-x-3"
          >
            {otherTechs.map((tech) => (
              <motion.div key={tech.name} variants={iconVariants}>
                <Image
                  width={32}
                  height={32}
                  src={tech.url}
                  className="h-8 w-8 select-none"
                  alt={tech.name}
                  title={tech.name}
                  priority
                />
              </motion.div>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const variants: Variants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerDirection: -1
    }
  }
};

const iconVariants = {
  initial: { opacity: 0, y: 50 },
  exit: { opacity: 0, y: 0 },
  enter: { opacity: 1, y: 0 }
};

export default ProjectTechList;
