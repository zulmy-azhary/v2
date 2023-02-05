import Head from "next/head";
import clsx from "clsx";
import { Footer, Navbar } from "@/components/organisms";
import { type MotionProps, motion } from "framer-motion";
import React, { useEffect } from "react";

type Props = React.HTMLAttributes<HTMLElement> &
  MotionProps & {
    title: string;
    metaDescription?: string;
    padding?: string;
  };

const Layout: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { title = "Loading...", metaDescription, padding, children, className, ...rest } = props;
  const defaultTitle = `Zulmy Azhary AS | ${title}`;

  useEffect(() => {
    const steps = ["/", "-", "\\", "|"];
    let step = 0;
    const handleTitle = () => {
      if (step >= 4) step = 0;
      document.title = `Zulmy Azhary AS ${steps[step++]} ${title}`;
    };

    const interval = setInterval(handleTitle, 500);
    return () => clearInterval(interval);
  }, [title]);

  return (
    <>
      <Head>
        <title>{defaultTitle}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
      </Head>
      <Navbar />
      <motion.main
        id="top"
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.5 }}
        className={clsx(
          "mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl",
          className ?? "min-h-screen",
          padding ?? "pt-36 pb-32 md:pt-44 lg:pt-40 xl:pt-48 2xl:pt-72"
        )}
        {...rest}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

export default Layout;
