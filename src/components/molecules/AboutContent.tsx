import React from "react";
import { Dots, Text } from "@/components/atoms";

const contents = [
  "Hi, i'm Zulmy Azhary (a.k.a. Zoel)!",
  "I'm currently a college student pursuing a bachelor's degree in computer science at Unitama.",
  "I'm a hardworking and dedicated college student with a strong passion for computer science, and I'm looking forward to a successful career in this exciting and constantly evolving industry.",
  "In my free time, I enjoy learning about new technologies and programming languages and build website projects that can train me to be proficient in the field of web development, as well as staying up to date with the latest trends in the field.",
];

const AboutContent: React.FC = () => {
  return (
    <div className="md:basis-1/2 flex flex-col gap-y-6 font-thin text-sm md:text-base text-gray tracking-tight relative">
      {contents.map((content, i) => (
        <Text key={i} className="leading-6">
          {content}
        </Text>
      ))}
      <Dots size={16} className="grid-cols-4 gap-2 md:gap-4 absolute rotate-12 -z-10 top-12 md:-top-12 lg:-top-20 xl:-top-24 right-3 md:right-20 lg:right-0" />
      <Dots size={20} className="grid-cols-5 gap-x-5 gap-y-3 absolute -z-20 -rotate-12 -bottom-20 lg:-bottom-24 xl:-bottom-32 -left-2 md:left-20 lg:-left-12 xl:-left-24" />
    </div>
  );
};

export default AboutContent;
