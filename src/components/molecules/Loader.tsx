import Head from "next/head";
import React, { useEffect } from "react";
import { type Transition, motion } from "framer-motion";

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loader: React.FC<Props> = ({ setLoading }) => {
  useEffect(() => {
    setLoading(true);

    setTimeout(() => setLoading(false), 1500);
  }, [setLoading]);

  return (
    <motion.span
      className="fixed inset-0 z-50 flex items-center justify-center gap-x-2 bg-bgColor"
      variants={wrapperVariants}
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Zulmy Azhary AS | Loading...</title>
      </Head>
      {Array.from(new Array(3)).map((_, i: number) => (
        <motion.div
          key={i}
          className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-accent"
          variants={dotVariants}
          transition={dotTransition}
        />
      ))}
    </motion.span>
  );
};

const wrapperVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const dotVariants = {
  animate: {
    y: [0, 15],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5
      }
    }
  }
};

const dotTransition: Transition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse"
};

export default Loader;
