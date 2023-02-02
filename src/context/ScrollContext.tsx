import { useToggle } from ".";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ScrollCtx {
  scroll: boolean;
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollContext = createContext<ScrollCtx>({} as ScrollCtx);
export const useScroll = (): ScrollCtx => useContext(ScrollContext);

const ScrollProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const { setOpen } = useToggle();

  const scrollHandler = (): void => {
    window.scrollY && setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return <ScrollContext.Provider value={{ scroll, setScroll }}>{children}</ScrollContext.Provider>;
};

export default ScrollProvider;
