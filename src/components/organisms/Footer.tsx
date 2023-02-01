import React from "react";
import { FooterContent, FooterCopyright, FooterMedia } from "@/components/molecules";

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 border-t-[1px] border-gray py-10 px-6">
      <div className="mx-auto grid max-w-xs grid-cols-2 gap-y-8 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <FooterContent />
        <FooterMedia />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
