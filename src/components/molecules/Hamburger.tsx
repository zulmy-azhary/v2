import { Box } from "@/components/atoms";
import React from "react";
import { cn } from "@/lib/utils";
import { useToggle } from "@/context";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Hamburger: React.FC<Props> = (props) => {
  const { isOpen, setOpen } = useToggle();

  return (
    <div
      {...props}
      className={cn(
        "relative z-50 flex w-7 cursor-pointer flex-col items-end gap-y-2 transition-all duration-500 md:hidden",
        isOpen && "rotate-[225deg]"
      )}
      onClick={() => setOpen((prev) => !prev)}
    >
      <Box
        className={cn(
          "h-[2px] w-full border-none bg-gray transition-all duration-300",
          isOpen ? "translate-y-2.5 rotate-90" : "delay-300"
        )}
      />
      <Box
        className={cn(
          "h-[2px] w-9/12 border-none bg-gray transition-all duration-300",
          isOpen ? "invisible opacity-0" : "delay-300"
        )}
      />
      <Box
        className={cn(
          "h-[2px] border-none bg-gray transition-all duration-300",
          isOpen ? "w-full -translate-y-2.5" : "w-5/6 delay-300"
        )}
      />
    </div>
  );
};

export default Hamburger;
