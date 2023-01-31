import { Link as CustomLink } from "@/components/atoms";
import React from "react";

const links = ["about", "skills", "projects", "contacts"];

const NavList: React.FC = () => {
  return (
    <ul className="fixed inset-0 flex flex-col justify-center gap-y-16 gap-x-7 bg-bgColor px-7 md:static md:flex-row md:gap-y-0 md:bg-transparent md:px-0">
      {links.map((link, i) => (
        <CustomLink key={i} to={`#${link}`} className="text-4xl md:text-base">
          {link}
        </CustomLink>
      ))}
    </ul>
  );
};

export default NavList;
