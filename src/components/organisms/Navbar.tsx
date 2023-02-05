import { ButtonLink } from "@/components/atoms";
import React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRouter } from "next/router";
import { useToggle } from "@/context";
import { BrandLogo, Hamburger, NavList, Sidebar } from "@/components/molecules";

const items = ["about", "skills", "projects", "contacts"];

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const isHomePage = pathname === "/";
  const isTablet = useMediaQuery("(min-width: 768px)");
  const { isOpen, isClosed } = useToggle();
  const asideRef = useOnClickOutside(isOpen, isClosed);

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-bgColor pt-5 pb-5 md:pt-7 md:pb-3 xl:pt-10">
      <nav className="mx-auto flex max-w-xs items-center justify-between md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl">
        <BrandLogo />
        <aside ref={asideRef as React.RefObject<HTMLElement>}>
          {isHomePage ? (
            isTablet ? (
              <NavList items={items} />
            ) : (
              <>
                <Sidebar isOpen={isOpen} items={items} />
                <Hamburger />
              </>
            )
          ) : (
            <ButtonLink className="text-gray hover:text-white">{"<~~"} Back</ButtonLink>
          )}
        </aside>
      </nav>
    </header>
  );
};

export default Navbar;
