import React from "react";
import { QuoteAuthor, QuoteText } from "@/components/atoms";

const Quote: React.FC = () => {
  return (
    <section className={"lg:w-11/12 xl:w-9/12 text-center md:mx-auto flex flex-col justify-center items-center relative"}>
      <QuoteText>Code is like humor. When you have to explain it, it&apos;s bad.</QuoteText>
      <QuoteAuthor>Cory House</QuoteAuthor>
    </section>
  );
};

export default Quote;
