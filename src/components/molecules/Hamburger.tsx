import React from "react";
import { Box } from "@/components/atoms";
import { useToggle } from "@/context";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Hamburger: React.FC<Props> = (props) => {
  const { setOpen } = useToggle();
  return (
    <div
      className="relative z-50 flex w-7 cursor-pointer flex-col items-end gap-y-2 md:hidden"
      onClick={() => setOpen((prev) => !prev)}
    >
      <Box className="h-[2px] w-full border-none bg-gray" />
      <Box className="h-[2px] w-9/12 border-none bg-gray" />
      <Box className="h-[2px] w-5/6 border-none bg-gray" />
    </div>
  );
};

export default Hamburger;
