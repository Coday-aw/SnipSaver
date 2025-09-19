"use client";
import { useSnippets } from "@/hooks/useSnippets";
import { getLanguageIcon } from "../GetLangyageIcon";

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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-10 text-slate-500 dark:text-slate-300">
      <p className="font-bold text-xl">Languages</p>
      <ul className="mt-2 space-y-2 p-2">
        {sortedLanguages.map((language) => (
          <li key={language.name} className="flex items-center">
            {getLanguageIcon(language.name, 20)}
            <span className="ml-2">{language.name}</span>
            <span className="ml-auto">{language.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Languages;
