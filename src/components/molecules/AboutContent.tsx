import React from "react";
import { Text } from "@/components/atoms";

const AboutContent: React.FC = () => {
  const contents = [
    "Hi, i'm Zulmy Azhary (a.k.a. Zoel)!",
    "I'm currently a college student pursuing a bachelor&apos;s degree in computer science at Unitama.",
    "I'm a hardworking and dedicated college student with a strong passion for computer science, and I'm looking forward to a successful career in this exciting and constantly evolving industry.",
    "In my free time, I enjoy learning about new technologies and programming languages and build website projects that can train me to be proficient in the field of web development, as well as staying up to date with the latest trends in the field.",
  ];
  return (
    <div className="md:basis-3/5 flex flex-col gap-y-6 font-thin text-sm md:text-base text-gray tracking-tight">
      {contents.map((content, i) => (
        <Text key={i} className="leading-6">
          {content}
        </Text>
      ))}
    </div>
  );
};

export default AboutContent;
