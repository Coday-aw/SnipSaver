"use client";
import toast, { Toaster } from "react-hot-toast";
import SnippetCard from "../components/SnippetCard";
import { useSnippets } from "@/hooks/useSnippets";
import { useSnippets as useSnippetContext } from "@/app/components/context/SnippetContext";

function page() {
  const { snippets, loading, setSnippets } = useSnippets();
  const { searchQuery } = useSnippetContext();

  const filteredSnippets = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteSnippet = (id: number) => {
    setSnippets(snippets.filter((snippet) => Number(snippet.id) !== id));
  };

  if (loading) return <div>loading...</div>;

  if (filteredSnippets.length === 0)
    return (
      <div className="text-xl font-bold">You have no favorite snippets</div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
      <Toaster />
      {filteredSnippets.map((snippet) => (
        <div key={snippet.id}>
          <SnippetCard snippet={snippet} onDelete={handleDeleteSnippet} />
        </div>
      ))}
    </div>
  );
}
export default page;
