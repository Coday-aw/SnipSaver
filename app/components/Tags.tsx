import { useSnippets as useSnippetsContext } from "@/app/components/context/SnippetContext";
import { useSnippets } from "@/hooks/useSnippets";

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
      {tags.length > 0 ? (
        <div className="flex flex-col gap-2 overflow-hidden overflow-y-scroll p-2 mb-5 ">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-4 py-2 rounded-lg  cursor-pointer font-medium text-start 
                ${
                  selectedTag === ""
                    ? " bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    : ""
                }
                `}
          >
            All
          </button>

          {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-3 rounded-lg cursor-pointer font-medium text-start ${
                  selectedTag === tag
                    ? " bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    : ""
                }`}
              >
                {tag}
              </button>
          ))}
        </div>
      )
      : (
        <p className="px-3">No tags found</p>
      )
      }
    </>
  );
};

export default Tags;
