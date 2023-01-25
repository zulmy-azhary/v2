import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{scrollBehavior: "smooth"}}>
      <Head />
      <body className="relative font-firaCode bg-bgColor min-h-screen text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
