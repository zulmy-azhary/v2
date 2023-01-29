import React from "react";
import { Text } from "@/components/atoms";
import { FaHeart } from "react-icons/fa";

const FooterCopyright: React.FC = () => {
  return (
    <Text className="col-span-2 justify-self-center self-center text-gray text-center text-sm lg:text-base">
      Created with <FaHeart className="inline-block text-red-500" /> by Zulmy Azhary AS
    </Text>
  );
};

export default FooterCopyright;
