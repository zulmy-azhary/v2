import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative min-h-screen bg-bgColor text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
