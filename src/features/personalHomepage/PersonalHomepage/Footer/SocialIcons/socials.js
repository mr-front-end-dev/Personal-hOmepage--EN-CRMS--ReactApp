import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Mr-Front-End-dev",
    Icon: styleIcon(GitHubIcon),
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nikita-rysiev-a4b7921b4",
    Icon: styleIcon(LinkedinIcon),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    Icon: styleIcon(InstagramIcon),
  },
]