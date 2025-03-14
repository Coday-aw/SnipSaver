"use client";
import Tags from "@/app/components/Tags";
import SnippetCard from "../components/SnippetCard";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Button from "../components/Button";
import { useSnippets } from "@/hooks/useSnippets";
import { useSnippets as useSnippetsContext } from "@/app/components/context/SnippetContext";

function DashBoard() {
  const { snippets, loading, setSnippets } = useSnippets();
  const { searchQuery, selectedTag } = useSnippetsContext();

  const filteredSnippets = snippets.filter(
    (snippet) =>
      (snippet.title
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) ||
        snippet.language
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())) &&
      (selectedTag === "" ||
        snippet.tags
          .split(",")
          .map((tag) => tag.trim())
          .includes(selectedTag))
  );

  const handleDeleteSnippet = (id: number) => {
    setSnippets(snippets.filter((snippet) => Number(snippet.id) !== id));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Tags />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Toaster />
        {filteredSnippets.length === 0 ? (
          <div className="flex justify-center items-center mt-32">
            <div className="flex flex-col gap-10">
              <p className="text-2xl font-bold">Welcome to Snip Saver</p>
              <Button width="150px">
                <Link href="/create">Create snippet</Link>
              </Button>
            </div>
          </div>
        ) : (
          filteredSnippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              onDelete={handleDeleteSnippet}
              snippet={snippet}
            />
          ))
        )}
      </div>
    </>
  );
}

export default DashBoard;
