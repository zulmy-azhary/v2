import { FaHeart } from "react-icons/fa";
import React from "react";
import { Text } from "@/components/atoms";

const FooterCopyright: React.FC = () => {
  return (
    <Text className="col-span-2 self-center justify-self-center text-center text-sm tracking-wide text-gray lg:text-base">
      Created with <FaHeart className="inline-block text-red-500" /> by Zulmy Azhary AS
    </Text>
  );
};

export default FooterCopyright;
