import { Link } from "@/components/atoms";
import React from "react";

interface Props {
  items: string[];
}

const NavList: React.FC<Props> = ({ items }) => {
  return (
    <ul className="flex gap-x-7 px-7 pt-48 md:px-0 md:pt-0">
      {items.map((item, i) => (
        <li
          key={i}
          className={
            "text-base before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent before:content-['#']"
          }
        >
          <Link to={item}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
