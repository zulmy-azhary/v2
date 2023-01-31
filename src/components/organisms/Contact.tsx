import React from "react";
import { Section } from "../molecules";
import { Box, Text } from "@/components/atoms";
import { FaDiscord } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <Section section={"contacts"} className="h-[900px]">
      <div className="flex flex-col justify-between md:flex-row">
        <Text className="basis-5/12 text-base text-gray">
          I&apos;m interested in freelance opportunities. However, if you have other requests or questions, don&apos;t
          hesitate to contact me.
        </Text>
        <Box className="flex w-fit basis-1/5 flex-col gap-y-3 p-6">
          <Text>Contact me at</Text>
          <Link
            className="flex items-center gap-x-2 text-gray transition-colors hover:text-white"
            href="https://discord.com/users/1015875403627364362"
            target="_blank"
          >
            <FaDiscord className="text-2xl" />
            <Text>Zoel#5767</Text>
          </Link>
        </Box>
      </div>
    </Section>
  );
};

export default Contact;
