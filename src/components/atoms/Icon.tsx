import React from "react";
import type { IconType } from "react-icons";
import clsx from "clsx";

interface Props {
  name: IconType;
}

const Icon: React.FC<Props> = ({ name: IconName }) => {
  return (
    <IconName
      className={clsx("text-gray cursor-pointer transition-colors w-7 h-7 hover:text-primary")}
    />
  );
};

export default Icon;
