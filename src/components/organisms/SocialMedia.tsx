import React from "react";
import { Icons } from "../molecules";

const SocialMedia: React.FC = () => {
  return (
    <div className="hidden md:flex md:flex-col-reverse lg:flex-col items-center gap-y-5 fixed z-50 md:bottom-0 lg:top-0 md:left-2 xl:left-5">
      <span className="w-[1px] h-52 bg-gray" />
      <Icons />
    </div>
  );
};

export default SocialMedia;
