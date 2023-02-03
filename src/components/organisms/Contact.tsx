import { FaDiscord } from "react-icons/fa";
import type { IconType } from "react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Section } from "@/components/molecules";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { Box, Text } from "@/components/atoms";

const Contact: React.FC = () => {
  return (
    <Section section={"contacts"}>
      <div className="flex flex-col items-center justify-between gap-y-12 lg:flex-row">
        <Image
          src="/assets/contact-bg.svg"
          width={512}
          height={512}
          alt="Contact Background Image"
          className="w-full basis-2/4 select-none object-contain md:w-11/12 lg:w-7/12 lg:basis-6/12 xl:w-2/4"
          priority
        />
        <div className="flex grow basis-2/4 flex-col items-center justify-between gap-y-5 lg:basis-5/12 lg:items-end lg:gap-y-10">
          <Text className="text-center text-sm text-gray lg:text-end lg:text-base xl:w-5/6">
            I&apos;m interested in freelance opportunities. However, if you have other requests or questions, don&apos;t
            hesitate to contact me.
          </Text>
          <Box className="flex flex-col gap-y-3 p-4 xl:w-2/4">
            <Text className="text-sm md:text-base">Let&apos;s connect :</Text>
            <div className="flex flex-col gap-y-1 text-sm">
              {contacts.map(({ icon: Icon, url, text }: Contact, i: number) => (
                <Link
                  key={i}
                  className="flex items-center gap-x-2 text-gray transition-colors hover:text-white"
                  href={url}
                  target="_blank"
                >
                  <Icon className="text-lg" />
                  <Text className="text-xs">{text}</Text>
                </Link>
              ))}
            </div>
          </Box>
        </div>
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
