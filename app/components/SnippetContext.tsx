"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Snippet } from "@/lib/types";

interface SnippetsContextProps {
  snippets: Snippet[];
  setSnippets: React.Dispatch<React.SetStateAction<Snippet[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SnippetsContext = createContext<SnippetsContextProps | undefined>(
  undefined
);

export const SnippetsProvider = ({ children }: { children: ReactNode }) => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SnippetsContext.Provider
      value={{ snippets, setSnippets, searchQuery, setSearchQuery }}
    >
      {children}
    </SnippetsContext.Provider>
  );
};

export const useSnippets = () => {
  const context = useContext(SnippetsContext);
  if (!context) {
    throw new Error("useSnippets must be used within a SnippetsProvider");
  }
  return context;
};
