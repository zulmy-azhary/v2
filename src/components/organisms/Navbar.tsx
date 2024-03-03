import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useMemo } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRouter } from "next/router";
import { useToggle } from "@/context";
import { BrandLogo, Hamburger, NavList, Sidebar } from "@/components/molecules";
import { homeNav, projectNav } from "@/data/nav";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const isTablet = useMediaQuery("(min-width: 768px)");
  const { isOpen, isClosed } = useToggle();
  const asideRef = useOnClickOutside(isOpen, isClosed);

  const chooseItems = useMemo(() => {
    if (pathname === "/projects") {
      return projectNav;
    }
    return homeNav;
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <header key={pathname} className="fixed inset-x-0 top-0 z-10 bg-bgColor pt-5 pb-5">
        <nav className="mx-auto flex max-w-xs items-center justify-between md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl">
          <BrandLogo />
          {isTablet ? (
            <NavList items={chooseItems} />
          ) : (
            <aside ref={asideRef as React.MutableRefObject<HTMLElement>}>
              <Sidebar isOpen={isOpen} items={chooseItems} />
              <Hamburger />
            </aside>
          )}
        </nav>
      </header>
    </AnimatePresence>
  );
};

export default Navbar;
