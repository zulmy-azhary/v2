import React from "react";
import { Icons } from "../molecules";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SocialMedia: React.FC = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isTablet && (
        <div className="fixed z-50 hidden items-center gap-y-5 md:bottom-0 md:left-2 md:flex md:flex-col-reverse xl:left-5">
          <span className="h-60 w-[1px] bg-gray" />
          <Icons />
        </div>
      )}
    </>
  );
};

export default SocialMedia;
