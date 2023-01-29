import React from "react";
import { FooterContent, FooterCopyright, FooterMedia } from "@/components/molecules";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 border-t-[1px] border-gray">
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto grid grid-cols-2 gap-y-8">
        <FooterContent />
        <FooterMedia />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
