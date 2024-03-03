import { Link } from "@/components/atoms";
import { motion } from "framer-motion";

interface Props<T> {
  items: readonly T[];
  isOpen: boolean;
}

const Sidebar = <T extends string>({ items, isOpen }: Props<T>) => {
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
            transition={{ type: "spring" }}
            className="flex items-center text-4xl font-light before:mr-1 before:bg-primary before:bg-clip-text before:text-transparent before:content-['#']"
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
