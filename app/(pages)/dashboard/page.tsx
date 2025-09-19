"use client";
import Tags from "@/app/components/Tags";
import SnippetCard from "../../components/SnippetCard";
import toast, { Toaster } from "react-hot-toast";
import { useSnippets } from "@/hooks/useSnippets";
import { useSnippets as useSnippetsContext } from "@/app/components/context/SnippetContext";
import Loader from "@/app/components/Loader";
import EmptyState from "@/app/components/EmptyState";

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

  const isSearchingOrFiltering =
    searchQuery.trim() !== "" || selectedTag !== "";

  if (loading) return <Loader />;

  return (
    <div>
      <Toaster />
      <Tags />
      {filteredSnippets.length === 0 ? (
        isSearchingOrFiltering ? (
          <div className="flex flex-col justify-center items-center mt-40 gap-4 text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">No Results Found</h3>
              <p className="text-lg">No snippets match your search criteria.</p>
              {searchQuery && (
                <p className="text-sm mt-2">
                  Searched for: "
                  <span className="font-semibold">{searchQuery}</span>"
                </p>
              )}
              {selectedTag && (
                <p className="text-sm mt-1">
                  Filtered by tag: "
                  <span className="font-semibold">{selectedTag}</span>"
                </p>
              )}
            </div>
          </div>
        ) : (
          <EmptyState />
        )
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {filteredSnippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              onDelete={handleDeleteSnippet}
              snippet={snippet}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DashBoard;
