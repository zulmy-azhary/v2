import React from "react";
import type { IconType } from "react-icons";
import clsx from "clsx";

interface Props extends React.SVGAttributes<HTMLOrSVGElement> {
  iconName: IconType;
}

const Icon: React.FC<Props> = (props) => {
  const { iconName: IconName, className, ...rest } = props;
  
  return (
    <IconName
      className={clsx("text-gray cursor-pointer transition-colors w-7 h-7 hover:text-primary", className)}
      {...rest}
    />
  );
};

export default Icon;
