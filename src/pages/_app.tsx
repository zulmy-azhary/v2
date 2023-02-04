import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Loader } from "@/components/molecules";
import clsx from "clsx";
import { firaCode } from "@/styles/fonts";
import { useState } from "react";
import { ScrollProvider, ToggleProvider } from "@/context";

export default function App({ Component, pageProps, router }: AppProps) {
  const url = router.route;
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ToggleProvider>
        <ScrollProvider>
          <div className={clsx(firaCode.variable, "overflow-hidden font-firaCode")}>
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
              {isLoading ? <Loader setLoading={setLoading} /> : <Component key={url} {...pageProps} />}
            </AnimatePresence>
          </div>
        </ScrollProvider>
      </ToggleProvider>
    </>
  );
}
