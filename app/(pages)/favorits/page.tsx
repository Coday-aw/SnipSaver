"use client";
import toast, { Toaster } from "react-hot-toast";

import SnippetCard from "../components/SnippetCard";

import { useSnippets } from "@/hooks/useSnippets";

function page() {
  const { snippets, loading, setSnippets } = useSnippets();

  const handleDeleteSnippet = (id: number) => {
    setSnippets(snippets.filter((snippet) => Number(snippet.id) !== id));
  };

  if (loading) return <div>loading...</div>;

  if (snippets.length === 0)
    return (
      <div className="text-xl font-bold">You have no favorite snippets</div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
      <Toaster />
      {snippets.map((snippet) => (
        <div key={snippet.id}>
          <SnippetCard snippet={snippet} onDelete={handleDeleteSnippet} />
        </div>
      ))}
    </div>
  );
}
export default page;
