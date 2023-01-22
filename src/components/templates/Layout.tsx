import Head from "next/head";
import React from "react";
import { Navbar } from "@/components/organisms";

interface Props {
  title: string;
  metaDescription?: string;
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title = "Loading...",
  metaDescription,
}) => {
  const generateTitle = `Zulmy Azhary AS | ${title}`;

  return (
    <>
      <Head>
        <title>{generateTitle}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
      </Head>
      <Navbar />
      <main className="mt-36 md:mt-44 xl:mt-48 flex flex-col gap-y-20 md:gap-y-28">{children}</main>
    </>
  );
};

export default Layout;
