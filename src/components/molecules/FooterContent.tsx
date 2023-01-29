import React from "react";
import { Logo, Text } from "@/components/atoms";

const FooterContent: React.FC = () => {
  return (
    <div className="col-span-2 md:col-span-1 flex flex-col gap-y-2">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-1">
          <Logo className="stroke-white scale-75" />
          <Text className="text-2xl font-semibold">Zoel</Text>
        </div>
        <Text className="text-sm text-gray">zulmyazhary32@gmail.com</Text>
      </div>
      <Text className="ml-2 text-sm lg:text-base text-center md:text-start font-light xl:w-5/6">Web designer and front-end developer based in Makassar, Indonesia</Text>
    </div>
  );
};

export default FooterContent;
