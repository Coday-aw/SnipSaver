"use client";

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

import { useSnippets } from "@/hooks/useSnippets";

const Languages = () => {
  const { snippets, loading } = useSnippets();

  const languages = snippets.map((snippet) => snippet.language);

  const languageCount = languages.reduce(
    (acc: { [key: string]: number }, lang: string) => {
      acc[lang] = (acc[lang] || 0) + 1;
      return acc;
    },
    {}
  );

  const sortedLanguages = Object.entries(languageCount).map(([lang, count]) => {
    return {
      name: lang,
      count,
    };
  });

  const getIcon = (language: string) => {
    switch (language.toLocaleLowerCase()) {
      case "javascript":
        return <IoLogoJavascript size={20} />;
      case "python":
        return <SiPython size={20} />;
      case "java":
        return <FaJava size={20} />;
      case "html":
        return <SiHtml5 size={20} />;
      case "css":
        return <SiCss3 size={20} />;
      case "typescript":
        return <BiLogoTypescript size={20} />;
      case "go":
        return <SiGo size={20} />;
      case "ruby":
        return <SiRuby size={20} />;
      case "php":
        return <SiPhp size={20} />;
      case "swift":
        return <SiSwift size={20} />;
      case "c++":
        return <SiCplusplus size={20} />;
      case "c#":
        return <SiSharp size={20} />;
      case "sql":
        return <SiMysql size={20} />;
      default:
        return null;
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-10 text-slate-500 dark:text-slate-300">
      <p className="font-bold text-xl">Languages</p>
      <ul className="mt-2 space-y-2 p-2">
        {sortedLanguages.map((language) => (
          <li key={language.name} className="flex items-center">
            {getIcon(language.name)}
            <span className="ml-2">{language.name}</span>
            <span className="ml-auto">{language.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Languages;
