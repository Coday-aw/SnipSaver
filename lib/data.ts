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
    color: "#facc15", // yellow-400
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
    color: "#2563eb", // blue-600
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3b82f6", // blue-500
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#dc2626", // red-600
  },
  {
    name: "Go",
    icon: SiGo,
    color: "#06b6d4", // cyan-500
  },
  {
    name: "Ruby",
    icon: SiRuby,
    color: "#ef4444", // red-500
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "#7e22ce", // purple-600
  },
  {
    name: "Swift",
    icon: SiSwift,
    color: "#f97316", // orange-500
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#1d4ed8", // blue-700
  },
  {
    name: "C#",
    icon: SiSharp,
    color: "#6b21a8", // purple-700
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#ea580c", // orange-600
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#2563eb", // blue-600
  },
  {
    name: "SQL",
    icon: SiMysql,
    color: "#2563eb", // blue-600
  },
];


export const getLanguageData = (languageName: string) => {
  return AllLanguages.find(
    (lang) => lang.name.toLowerCase() === languageName.toLowerCase()
  );
};
