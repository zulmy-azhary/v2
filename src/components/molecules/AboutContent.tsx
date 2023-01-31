import React from "react";
import { Dots, Text } from "@/components/atoms";

const contents = [
  "Hi, i'm Zulmy Azhary (a.k.a. Zoel)!",
  "I'm currently a college student pursuing a bachelor's degree in computer science at Unitama.",
  "I'm a hardworking and dedicated college student with a strong passion for computer science, and I'm looking forward to a successful career in this exciting and constantly evolving industry.",
  "In my free time, I enjoy learning about new technologies and programming languages and build website projects that can train me to be proficient in the field of web development, as well as staying up to date with the latest trends in the field."
];

const AboutContent: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-y-6 text-sm font-thin tracking-tight text-gray md:basis-1/2 md:text-base">
      {contents.map((content, i) => (
        <Text key={i} className="leading-6">
          {content}
        </Text>
      ))}
      <Dots
        size={16}
        className="absolute top-12 right-3 -z-10 rotate-12 grid-cols-4 gap-2 md:-top-12 md:right-20 md:gap-4 lg:-top-20 lg:right-0 xl:-top-24"
      />
      <Dots
        size={20}
        className="absolute -bottom-20 -left-2 -z-20 -rotate-12 grid-cols-5 gap-x-5 gap-y-3 md:left-20 lg:-bottom-24 lg:-left-12 xl:-bottom-32 xl:-left-24"
      />
    </div>
  );
};

export default AboutContent;
