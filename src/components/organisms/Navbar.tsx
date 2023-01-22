import React from "react";
import { BrandLogo, NavList } from "@/components/molecules";

const Navbar: React.FC = () => {
  return (
    <header className="pt-5 md:pt-10 pb-5 md:pb-3 fixed top-0 inset-x-0 z-10 bg-bgColor">
      <nav className="flex justify-between items-center max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <BrandLogo />
        <NavList />
      </nav>
    </header>
  );
};

export default Navbar;
