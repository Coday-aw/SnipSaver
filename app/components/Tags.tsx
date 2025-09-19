import { Snippet } from "@/lib/types";
import { useSnippets as useSnippetsContext } from "@/app/components/context/SnippetContext";
import { useSnippets } from "@/hooks/useSnippets";

interface TagsProps {
  tags: string[];
}

const Tags = () => {
  const { selectedTag, setSelectedTag } = useSnippetsContext();
  const { snippets } = useSnippets();

  const tags = Array.from(
    new Set(
      snippets.flatMap((snippet) =>
        snippet.tags.split(",").map((tag) => tag.trim())
      )
    )
  );

  return (
    <>
      {tags.length > 0 && (
        <div className="flex gap-2 md:overflow-hidden overflow-x-scroll p-2 mb-5 border dark:border-none border-slate-300 dark:bg-slate-800 rounded-lg shadow-lg">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-4 py-2 rounded-lg  cursor-pointer font-medium 
                ${
                  selectedTag === ""
                    ? " bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    : ""
                }
                `}
          >
            All
          </button>

          {tags.map((tag, index) => (
            <div key={index}>
              <button
                key={index}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-3 rounded-lg cursor-pointer font-medium ${
                  selectedTag === tag
                    ? " bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    : ""
                }`}
              >
                {tag}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Tags;
