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
                ${selectedTag === "" ? "bg-blue-500 text-white" : ""}
                `}
          >
            All
          </button>

          {tags.map((tag, index) => (
            <div key={index}>
              <button
                key={index}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg cursor-pointer font-medium ${
                  selectedTag === tag ? "bg-blue-500 text-white" : ""
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
