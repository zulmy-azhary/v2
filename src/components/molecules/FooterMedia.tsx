import React from "react";
import { Text } from "@/components/atoms";
import { Icons } from ".";

const FooterMedia: React.FC = () => {
  return (
    <div className="col-span-2 md:col-span-1 justify-self-end flex flex-col gap-y-5 text-end">
      <Text className="text-2xl">Media</Text>
      <div className="flex gap-x-3">
        <Icons />
      </div>
    </div>
  );
};

export default FooterMedia;
