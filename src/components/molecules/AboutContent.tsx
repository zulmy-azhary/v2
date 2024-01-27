import { Dots, Text } from "@/components/atoms";

const contents = [
  "Hello, my name is Zulmy Azhary.",
  "I am a fresh graduate with a bachelor's degree in informatics engineering at Unitama. I am very interested in website development, especially in the front end.",
  "I am highly committed to immersing myself in the ever-evolving technology landscape, driven by a strong ambition to continuously refine and improve my skill set in the broad domain of web development.",
  "In my spare time, I enjoy learning new technologies by building projects that train me to be proficient in this field of web development."
];

const AboutContent: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-y-6 md:basis-1/2">
      {contents.map((content, i) => (
        <Text key={i} className="text-sm tracking-wide text-gray md:text-lg 2xl:text-xl">
          {content}
        </Text>
      ))}
      <Dots
        size={16}
        className="absolute -top-2 right-3 -z-10 rotate-12 grid-cols-4 gap-2 md:-top-6 md:right-20 md:gap-4 lg:-top-14 lg:right-0 xl:-top-20"
        color="bg-sky-400"
      />
      <Dots
        size={20}
        className="absolute -bottom-[4.5rem] -left-2 -z-20 -rotate-12 grid-cols-5 gap-x-5 gap-y-3 md:left-20 lg:-bottom-24 lg:-left-12 xl:-bottom-32 xl:-left-24"
        color="bg-red-400"
      />
    </div>
  );
};

export default AboutContent;
