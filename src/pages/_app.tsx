import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Loader } from "@/components/molecules";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ScrollProvider, ToggleProvider } from "@/context";
import { andika, firaCode } from "@/styles/fonts";

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
          <div className={cn(firaCode.variable, andika.variable, "overflow-hidden font-andika")}>
            {url === "/404" ? (
              <Component key={url} {...pageProps} />
            ) : (
              <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                {isLoading ? <Loader setLoading={setLoading} /> : <Component key={url} {...pageProps} />}
              </AnimatePresence>
            )}
          </div>
        </ScrollProvider>
      </ToggleProvider>
    </>
  );
}
