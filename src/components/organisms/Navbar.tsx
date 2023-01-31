import React from "react";
import { BrandLogo, Hamburger, NavList } from "@/components/molecules";
import { useRouter } from "next/router";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useToggle } from "@/context";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const isHomePage = pathname === "/";
  const isTablet = useMediaQuery("(min-width: 768px)");
  const { isOpen, isClosed } = useToggle();
  const asideRef = useOnClickOutside(isOpen, isClosed);

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-bgColor pt-5 pb-5 md:pt-10 md:pb-3">
      <nav className="mx-auto flex max-w-xs items-center justify-between md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <BrandLogo />
        <aside ref={asideRef as React.RefObject<HTMLElement>}>
          {isTablet ? isHomePage && <NavList /> : <Hamburger />}
          {!isTablet && isOpen && <NavList />}
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
