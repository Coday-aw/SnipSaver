import { IconType } from "react-icons";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiPython,
  SiGo,
  SiRuby,
  SiPhp,
  SiSwift,
  SiCplusplus,
  SiSharp,
  SiHtml5,
  SiCss3,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

type AllLanguages = {
  name: string;
  icon: IconType;
};

export const AllLanguages: AllLanguages[] = [
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Go",
    icon: SiGo,
  },
  {
    name: "Ruby",
    icon: SiRuby,
  },
  {
    name: "PHP",
    icon: SiPhp,
  },
  {
    name: "Swift",
    icon: SiSwift,
  },
  {
    name: "C++",
    icon: SiCplusplus,
  },
  {
    name: "C#",
    icon: SiSharp,
  },
  {
    name: "HTML",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    icon: SiCss3,
  },
  {
    name: "SQL",
    icon: SiMysql,
  },
];
