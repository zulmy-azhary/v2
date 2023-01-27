import React from "react";
import { Icons } from "../molecules";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SocialMedia: React.FC = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isTablet && (
      <div className="hidden md:flex md:flex-col-reverse items-center gap-y-5 fixed z-50 md:bottom-0 md:left-2 xl:left-5">
        <span className="w-[1px] h-52 bg-gray" />
        <Icons />
      </div>
      )}
    </>
  );
};

export default SocialMedia;
