import { AiOutlineMail } from "react-icons/ai";
import type { IconType } from "react-icons";
import Image from "next/image";
import React from "react";
import { Section } from "@/components/molecules";
import { ButtonLink, Text } from "@/components/atoms";

type Contact = {
  icon: IconType;
  text: string;
  url: string;
};

const Contact: React.FC = () => {
  return (
    <Section section={"contacts"}>
      <div className="flex flex-col items-center justify-between gap-y-10">
        <Image
          src="/assets/contact-bg.svg"
          width={512}
          height={512}
          alt="Contact Background Image"
          className="w-full basis-2/4 select-none object-contain md:w-11/12 lg:w-10/12 xl:w-9/12"
          priority
        />
        <Text className="text-center text-sm text-gray lg:text-base xl:w-4/6">
          I&apos;m interested in freelance or job opportunities. However, if you have other requests or questions,
          don&apos;t hesitate to send me an email.
        </Text>
        <ButtonLink className="flex items-center gap-x-2" variant="primary" href="mailto:zulmyazhary32@gmail.com">
          <AiOutlineMail className="text-lg md:text-xl xl:text-2xl" />
          <Text>Send Email</Text>
        </ButtonLink>
      </div>
    </Section>
  );
};

export default Contact;
