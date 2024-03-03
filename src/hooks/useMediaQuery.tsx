import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    // Clean Up
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

// For multiple media queries
type MediaQueryListProps<TValues> = {
  isDesktop: TValues;
  isLaptop: TValues;
  isTablet: TValues;
  isMobile: TValues;
};

export const useMediaQueryList = <TValues extends React.ReactNode>({
  isDesktop,
  isLaptop,
  isTablet,
  isMobile
}: MediaQueryListProps<TValues>) => {
  const isDesktopQuery = useMediaQuery("(min-width: 1440px)");
  const isLaptopQuery = useMediaQuery("(min-width: 1024px)");
  const isTabletQuery = useMediaQuery("(min-width: 768px)");

  if (isDesktopQuery) return isDesktop;
  if (isLaptopQuery) return isLaptop;
  if (isTabletQuery) return isTablet;
  return isMobile;
};
