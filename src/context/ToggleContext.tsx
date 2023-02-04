import { useMediaQuery } from "@/hooks/useMediaQuery";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

interface ToggleCtx {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isClosed: () => void;
}

const ToggleContext = createContext<ToggleCtx>({} as ToggleCtx);
export const useToggle = (): ToggleCtx => useContext(ToggleContext);

const ToggleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const isClosed = useCallback(() => setOpen(false), []);
  const isTablet = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isTablet) {
      setOpen(false);
    }
  }, [isTablet]);

  return <ToggleContext.Provider value={{ isOpen, setOpen, isClosed }}>{children}</ToggleContext.Provider>;
};

export default ToggleProvider;
