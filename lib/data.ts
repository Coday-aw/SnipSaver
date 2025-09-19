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
  color?: string;
};

export const AllLanguages: AllLanguages[] = [
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
    color: "text-blue-600",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-blue-500",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-red-600",
  },
  {
    name: "Go",
    icon: SiGo,
    color: "text-cyan-500",
  },
  {
    name: "Ruby",
    icon: SiRuby,
    color: "text-red-500",
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "text-purple-600",
  },
  {
    name: "Swift",
    icon: SiSwift,
    color: "text-orange-500",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "text-blue-700",
  },
  {
    name: "C#",
    icon: SiSharp,
    color: "text-purple-700",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "text-orange-600",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "text-blue-600",
  },
  {
    name: "SQL",
    icon: SiMysql,
    color: "text-blue-600",
  },
];

export const getLanguageData = (languageName: string) => {
  return AllLanguages.find(
    (lang) => lang.name.toLowerCase() === languageName.toLowerCase()
  );
};
