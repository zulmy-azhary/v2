import type { SocialMedia } from "@/types";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord, FaTelegram } from "react-icons/fa";

export const socialMedias: SocialMedia[] = [
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
    url: "https://www.linkedin.com/in/zulmyazhary/"
  },
  {
    iconName: FaDiscord,
    url: "https://discord.com/users/1015875403627364362"
  },
  {
    iconName: FaTelegram,
    url: "https://t.me/zulmyazhary"
  }
];
