import React from "react";
import { Section } from "../molecules";
import { Box, Text } from "@/components/atoms";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { IconType } from "react-icons";

const Contact: React.FC = () => {
  return (
    <Section section={"contacts"}>
      <div className="flex flex-col-reverse items-center justify-between gap-y-6 xl:flex-row">
        <div className="flex grow basis-2/4 flex-col items-center justify-between gap-y-12 xl:basis-5/12 xl:items-start">
          <Text className="text-center text-base text-gray md:text-start xl:w-5/6">
            I&apos;m interested in freelance opportunities. However, if you have other requests or questions, don&apos;t
            hesitate to contact me.
          </Text>
          <Box className="flex w-fit flex-col gap-y-3 p-4">
            <Text>Let&apos;s connect :</Text>
            <div className="flex flex-col gap-y-1 text-sm">
              {contacts.map(({ icon: Icon, url, text }: Contact, i) => (
                <Link
                  key={i}
                  className="flex items-center gap-x-2 text-gray transition-colors hover:text-white"
                  href={url}
                  target="_blank"
                >
                  <Icon className="text-xl" />
                  <Text>{text}</Text>
                </Link>
              ))}
            </div>
          </Box>
        </div>
        <Image
          src="/assets/contact-bg.svg"
          width={512}
          height={512}
          alt="Contact Background Image"
          className="basis-2/4 select-none xl:basis-6/12"
          priority
        />
      </div>
    </Section>
  );
};

type Contact = {
  icon: IconType;
  text: string;
  url: string;
};

const contacts: Contact[] = [
  {
    icon: FaDiscord,
    text: "Zoel#5767",
    url: "https://discord.com/users/1015875403627364362"
  },
  {
    icon: AiOutlineMail,
    text: "zulmyazhary32@gmail.com",
    url: "mailto:zulmyazhary32@gmail.com"
  },
  {
    icon: AiOutlineInstagram,
    text: "@zulmyazhary_",
    url: "https://www.instagram.com/zulmyazhary_"
  }
];

export default Contact;
