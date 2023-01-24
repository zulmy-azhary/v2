import Head from "next/head";
import React, { useEffect } from "react";
import { Navbar } from "@/components/organisms";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLElement> {
  title: string;
  metaDescription?: string;
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title = "Loading...",
  metaDescription,
  className,
  ...rest
}) => {
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
      <main className={clsx("pt-36 md:pt-44 xl:pt-48", className)} {...rest}>
        {children}
      </main>
    </>
  );
};

export default Layout;
