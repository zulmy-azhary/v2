import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fira_Code } from "@next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div style={firaCode.style} className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <Component style={firaCode.style} {...pageProps} />
      </div>
    </>
  );
}
