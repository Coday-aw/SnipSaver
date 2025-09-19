import React from "react";
import { getLanguageData } from "@/lib/data";
export const getLanguageIcon = (languageName: string, size: number = 20) => {
  const languageData = getLanguageData(languageName);
  if (!languageData) return null;

  const IconComponent = languageData.icon;
  return <IconComponent size={size} className={languageData.color} />;
};
