import { PiFacebookLogoBold } from "react-icons/pi";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";

// ICONS/LINKS FOR FOOTER

export const footerLinks = {
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: <PiFacebookLogoBold className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <AiOutlineInstagram className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <SlSocialTwitter className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: <AiOutlineGithub className="h-6 w-6" />,
    },
  ],
};
