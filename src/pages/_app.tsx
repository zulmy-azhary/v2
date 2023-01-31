import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import clsx from "clsx";
import { firaCode } from "@/styles/fonts";
import { ScrollProvider, ToggleProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={clsx(firaCode.variable, "overflow-hidden font-firaCode")}>
        <ToggleProvider>
          <ScrollProvider>
            <Component {...pageProps} />
          </ScrollProvider>
        </ToggleProvider>
      </div>
    </>
  );
}
