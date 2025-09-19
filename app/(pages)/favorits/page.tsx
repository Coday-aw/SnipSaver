"use client";
import toast, { Toaster } from "react-hot-toast";
import SnippetCard from "../../components/SnippetCard";
import { useLikedSnippets } from "@/hooks/useSnippets";
import { useSnippets as useSnippetContext } from "@/app/components/context/SnippetContext";
import Loader from "@/app/components/Loader";
import EmptyState from "@/app/components/EmptyState";

function page() {
  const { snippets, loading, setSnippets } = useLikedSnippets();
  const { searchQuery } = useSnippetContext();

  const filteredSnippets = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteSnippet = (id: number) => {
    setSnippets(snippets.filter((snippet) => Number(snippet.id) !== id));
  };

  if (loading) return <Loader />;

  if (filteredSnippets.length === 0) return <EmptyState />;

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
