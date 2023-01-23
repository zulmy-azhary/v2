import Head from "next/head";
import React from "react";
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
  const generateTitle = `Zulmy Azhary AS | ${title}`;

  return (
    <>
      <Head>
        <title>{generateTitle}</title>
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
