import { Icons } from ".";
import { Link } from "@/components/atoms";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  items: string[];
  isOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ items, isOpen }) => {
  return (
    <motion.ul
      className="fixed inset-y-0 right-0 flex w-full flex-col gap-y-10 gap-x-7 bg-bgColor px-7 pt-48 pb-16"
      variants={ulVariants}
      initial={false}
      animate={isOpen ? "opened" : "closed"}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          variants={liVariants}
          className={
            "text-center text-3xl before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent before:content-['#'] md:text-base"
          }
        >
          <Link to={item}>{item}</Link>
        </motion.li>
      ))}
      <motion.div variants={liVariants} className="mt-auto flex justify-center gap-x-4">
        <Icons />
      </motion.div>
    </motion.ul>
  );
};

const ulVariants = {
  opened: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.35
    },
    right: 0
  },
  closed: {
    transition: {
      staggerDirection: -1,
      duration: 0.35
    },
    right: "-100%"
  }
};

const liVariants = {
  opened: {
    x: 0,
    opacity: 1
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default Sidebar;
