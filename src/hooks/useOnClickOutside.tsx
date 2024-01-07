import { useEffect, useRef } from "react";

export const useOnClickOutside = <T extends HTMLElement>(
  state: boolean,
  handler: () => void
): React.MutableRefObject<T | undefined> => {
  const menuRef = useRef<T | undefined>(undefined);

  useEffect(() => {
    if (!state) return;
    // When user click outside
    const handlerEvent = (e: MouseEvent): void => {
      if (!menuRef.current?.contains(e.target as T) && state) {
        handler();
      }
    };

    // When user press esc key
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && state) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerEvent);
    document.addEventListener("keydown", handleEscKey);

    // Clean Up
    return () => {
      document.removeEventListener("mousedown", handlerEvent);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handler, state]);

  return menuRef;
};
