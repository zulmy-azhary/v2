import Head from "next/head";
import React, { useEffect } from "react";
import { Footer, Navbar } from "@/components/organisms";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLElement> {
  title: string;
  metaDescription?: string;
  padding?: string;
}

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
  });

  return (
    <>
      <Head>
        <title>{defaultTitle}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
      </Head>
      <Navbar />
      <main
        className={clsx(
          "max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto",
          className ?? "min-h-screen",
          padding ?? "pt-36 md:pt-44 xl:pt-48"
        )}
        {...rest}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
