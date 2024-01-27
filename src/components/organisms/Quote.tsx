import { QuoteAuthor, QuoteText } from "@/components/molecules";

const Quote: React.FC = () => {
  return (
    <section className="relative mt-24 flex flex-col items-center justify-center text-center md:mx-auto lg:w-11/12 xl:w-9/12">
      <QuoteText>Code is like humor. When you have to explain it, it&apos;s bad.</QuoteText>
      <QuoteAuthor>Cory House</QuoteAuthor>
    </section>
  );
};

export default Quote;
