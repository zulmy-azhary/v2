import type { IconType } from "react-icons";
import React from "react";
import clsx from "clsx";

interface Props extends React.SVGAttributes<HTMLOrSVGElement> {
  iconName: IconType;
}

const Icon: React.FC<Props> = (props) => {
  const { iconName: IconName, className, ...rest } = props;

  return (
    <IconName
      className={clsx("h-6 w-6 cursor-pointer text-gray transition-colors hover:text-primary lg:h-7 lg:w-7", className)}
      {...rest}
    />
  );
};

export default Icon;
