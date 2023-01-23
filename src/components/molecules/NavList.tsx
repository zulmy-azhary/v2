import { Link as CustomLink } from "@/components/atoms";
import React from "react";

const NavList: React.FC = () => {
  const links = ["about", "skills", "projects", "contacts"];
  return (
    <ul className="hidden md:flex gap-x-7">
      {links.map((link, i) => (
        <CustomLink key={i} to={`#${link}`}>
          {link}
        </CustomLink>
      ))}
    </ul>
  );
};

export default NavList;
