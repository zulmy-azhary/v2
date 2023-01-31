import React from "react";
import { Logo, Text } from "@/components/atoms";

const FooterContent: React.FC = () => {
  return (
    <div className="col-span-2 flex flex-col gap-y-2 md:col-span-1">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-1">
          <Logo className="scale-75 stroke-white" />
          <Text className="text-2xl font-semibold">Zoel</Text>
        </div>
        <Text className="text-sm text-gray">zulmyazhary32@gmail.com</Text>
      </div>
      <Text className="ml-2 text-center text-sm font-light md:text-start lg:text-base xl:w-5/6">
        Web designer and front-end developer based in Makassar, Indonesia
      </Text>
    </div>
  );
};

export default FooterContent;
