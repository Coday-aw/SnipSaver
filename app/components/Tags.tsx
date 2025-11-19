import { useSnippets as useSnippetsContext } from "@/app/components/context/SnippetContext";
import { useSnippets } from "@/hooks/useSnippets";

const Tags = () => {
  const { selectedTag, setSelectedTag } = useSnippetsContext();
  const { snippets } = useSnippets();

  const tagCount = snippets.reduce<Record<string, number>>((acc, snippet) => {
    snippet.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((t) => {
        acc[t] = (acc[t] || 0) + 1;
      });
    return acc;
  }, {});

  const tags = Object.keys(tagCount).sort();
  return (
    <>
      {tags.length > 0 ? (
        <div className="flex flex-col gap-2 overflow-hidden overflow-y-scroll p-2 mb-5 ">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-4 py-2 rounded-lg  cursor-pointer font-medium text-start flex justify-between 
                ${
                  selectedTag === ""
                    ? " bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    : ""
                }
                `}
          >
            <p>All</p>
            <p>{tags.length}</p>
          </button>

          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-3 rounded-lg cursor-pointer font-medium text-start flex justify-between ${
                selectedTag === tag
                  ? " bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
                  : ""
              }`}
            >
              <p>{tag}</p>
              <p>{tagCount[tag] ?? 0}</p>
            </button>
          ))}
        </div>
      ) : (
        <p className="px-3">No tags found</p>
      )}
    </>
  );
};

export default Tags;
