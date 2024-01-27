import { Icons } from "@/components/molecules";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SocialMedia: React.FC = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isTablet && (
        <motion.div
          variants={variants}
          initial="exit"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="fixed z-50 hidden items-center gap-y-5 md:bottom-0 md:left-2 md:flex md:flex-col-reverse xl:left-5"
        >
          <span className="h-[14.25rem] w-[1px] bg-gray lg:h-60" />
          <Icons />
        </motion.div>
      )}
    </>
  );
};

const variants = {
  exit: { opacity: 0, y: 250 },
  enter: { opacity: 1, y: 0 }
};

export default SocialMedia;
