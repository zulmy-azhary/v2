import { Icons } from ".";
import React from "react";
import { Text } from "@/components/atoms";

const FooterMedia: React.FC = () => {
  return (
    <div className="col-span-2 flex flex-col gap-y-1 justify-self-end text-end md:col-span-1 md:gap-y-5">
      <Text className="text-lg md:text-2xl">Media</Text>
      <div className="flex gap-x-3">
        <Icons />
      </div>
    </div>
  );
};

export default FooterMedia;
