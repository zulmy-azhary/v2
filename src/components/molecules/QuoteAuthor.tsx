const QuoteAuthor: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="-mt-[1px] w-fit self-end border border-gray py-3 px-4 lg:py-5 lg:px-6">
      <h3 className="text-sm before:mr-2 before:content-['-'] md:text-base lg:text-lg">{children}</h3>
    </div>
  );
};

export default QuoteAuthor;
