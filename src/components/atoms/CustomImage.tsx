import React from "react";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  className?: string;
  src: string;
  alt: string;
}

const CustomImage: React.FC<Props> = ({ className, src, alt }) => {
  return (
    <div className={clsx("select-none", className)}>
      <Image className="object-cover" fill priority src={src} alt={alt} />
    </div>
  );
};

export default CustomImage;
