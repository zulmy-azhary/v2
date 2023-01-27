import { firaCode } from "@/styles/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className={firaCode.className} style={{scrollBehavior: "smooth"}}>
      <Head />
      <body className="relative bg-bgColor min-h-screen text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
