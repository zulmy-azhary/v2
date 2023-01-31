import React from "react";
import { AiFillGithub, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { Icon } from "@/components/atoms";
import type { IconType } from "react-icons";

type Item = {
  iconName: IconType;
  url: string;
};

const items: Item[] = [
  {
    iconName: AiFillGithub,
    url: "https://github.com/zulmy-azhary"
  },
  {
    iconName: AiFillFacebook,
    url: "https://www.facebook.com/zulmyazhary"
  },
  {
    iconName: AiOutlineInstagram,
    url: "https://www.instagram.com/zulmyazhary_"
  },
  {
    iconName: AiFillLinkedin,
    url: "https://www.linkedin.com/in/zulmy-azhary-7a0b04159"
  }
];

const Icons: React.FC = () => {
  return (
    <>
      {items.map(({ iconName, url }, i) => (
        <a key={i} href={url} target="_blank" rel="noreferrer" aria-label="Visit my social media">
          <Icon iconName={iconName} />
        </a>
      ))}
    </>
  );
};

export default Icons;
