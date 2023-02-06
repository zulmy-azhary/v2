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
      className="fixed inset-y-0 right-0 grid w-full place-items-center bg-bgColor py-20"
      variants={ulVariants}
      initial={false}
      animate={isOpen ? "opened" : "closed"}
    >
      <motion.div className="mx-auto flex h-full w-full max-w-xs flex-col justify-center gap-y-8">
        {items.map((item, i) => (
          <motion.li
            key={i}
            variants={liVariants}
            transition={{ type: "tween" }}
            className={
              "text-3xl font-light before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent before:content-['#']"
            }
          >
            <Link to={item}>{item}</Link>
          </motion.li>
        ))}
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
