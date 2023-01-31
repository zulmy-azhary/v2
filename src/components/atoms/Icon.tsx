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
      className={clsx("h-7 w-7 cursor-pointer text-gray transition-colors hover:text-primary", className)}
      {...rest}
    />
  );
};

export default Icon;
