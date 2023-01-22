import { firaCode } from "@/styles/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={firaCode.style}>
      <Head />
      <body className="relative font-firaCode bg-bgColor min-h-screen text-white max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-col gap-y-20 overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
