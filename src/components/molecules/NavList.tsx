import { Link } from "@/components/atoms";
import { motion } from "framer-motion";

interface Props {
  items: string[];
}

const NavList: React.FC<Props> = ({ items }) => {
  return (
    <motion.ul
      variants={variants}
      initial="exit"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="flex gap-x-7 px-7 pt-48 md:px-0 md:pt-0"
    >
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-center text-base before:bg-primary before:bg-clip-text before:text-transparent before:content-['#']"
        >
          <Link to={item}>{item}</Link>
        </li>
      ))}
    </motion.ul>
  );
};

const variants = {
  exit: { opacity: 0, x: 200 },
  enter: { opacity: 1, x: 0 }
};

export default NavList;
