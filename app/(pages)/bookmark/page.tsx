"use client";
import toast, { Toaster } from "react-hot-toast";
import { FiStar } from "react-icons/fi";
import Searchbar from "@/app/components/Searchbar";
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

  return (
    <div className="space-y-6">
      <Toaster />
      <Searchbar />
      {filteredSnippets.length === 0 ? (
         <EmptyState title="No bookmarks found" description={searchQuery ? "No matching bookmarked snippets found." : "You haven't added any snippets to bookmarks yet!"} icon={<FiStar size={36} className="text-white" />}/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSnippets.map((snippet) => (
            <div key={snippet.id}>
              <SnippetCard snippet={snippet} onDelete={handleDeleteSnippet} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default page;
