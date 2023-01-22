import React from "react";
import { Icons } from "../molecules";

const SocialMedia: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-y-5 fixed z-50 top-0 lg:left-2 xl:left-5">
      <span className="w-[1px] h-52 bg-gray" />
      <Icons />
    </div>
  );
};

export default SocialMedia;
