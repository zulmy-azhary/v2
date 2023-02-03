import { Link } from "@/components/atoms";
import React from "react";

const links = ["about", "skills", "projects", "contacts"];

const NavList: React.FC = () => {
  return (
    <ul className="fixed inset-0 flex flex-col gap-y-10 gap-x-7 bg-bgColor px-7 pt-48 md:static md:flex-row md:gap-y-0 md:bg-transparent md:px-0 md:pt-0">
      {links.map((link, i) => (
        <li
          key={i}
          className={
            "text-3xl before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent before:content-['#'] md:text-base"
          }
        >
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
