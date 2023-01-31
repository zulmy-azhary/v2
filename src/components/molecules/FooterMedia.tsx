import React from "react";
import { Text } from "@/components/atoms";
import { Icons } from ".";

const FooterMedia: React.FC = () => {
  return (
    <div className="col-span-2 flex flex-col gap-y-5 justify-self-end text-end md:col-span-1">
      <Text className="text-2xl">Media</Text>
      <div className="flex gap-x-3">
        <Icons />
      </div>
    </div>
  );
};

export default FooterMedia;
