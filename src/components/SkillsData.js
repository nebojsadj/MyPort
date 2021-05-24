import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNpm,
  SiStyledComponents,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { IoLogoSass } from "react-icons/io";

export const data1 = [
  { name: "HTML", icon: <SiHtml5 className="mt-3 mI1" /> },
  { name: "CSS", icon: <SiCss3 className="mt-3 mI1" /> },
  { name: "JavaScript", icon: <SiJavascript className="mt-3 mI1" /> },
  { name: "React", icon: <SiReact className="mt-3 mI1" /> },
];

export const data2 = [
  { name: "Redux", icon: <SiRedux className="mt-3 mI1" /> },
  { name: "Bootstrap", icon: <BsBootstrap className="mt-3 mI1" /> },
  {
    name: "Styled-c.",
    icon: <SiStyledComponents className="mt-3 mI1" />,
  },
  { name: "SASS", icon: <IoLogoSass className="mt-3 mI1" /> },
];
export const data3 = [
  { name: "NPM", icon: <SiNpm className="mt-3 mI1" /> },
  { name: "Git", icon: <FaGitAlt className="mt-3 mI1" /> },
];
