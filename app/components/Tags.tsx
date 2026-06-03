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
        <div className="flex flex-row gap-3 overflow-x-auto no-scrollbar py-2 mb-6">
          <button
            onClick={() => setSelectedTag("")}
            className={`shrink-0 px-5 py-2 rounded-full cursor-pointer font-medium flex items-center gap-2 border transition-all duration-200 ${
              selectedTag === ""
                ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-transparent shadow-md shadow-violet-500/20"
                : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-violet-500/50 hover:text-violet-500"
            }`}
          >
            <span>All</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${selectedTag === "" ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700"}`}>{tags.length}</span>
          </button>

          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`shrink-0 px-5 py-2 rounded-full cursor-pointer font-medium flex items-center gap-2 border transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-transparent shadow-md shadow-violet-500/20"
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-violet-500/50 hover:text-violet-500"
              }`}
            >
              <span>{tag}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${selectedTag === tag ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700"}`}>{tagCount[tag] ?? 0}</span>
            </button>
          ))}
        </div>
      ) : (
        <p className="px-3 mb-6 text-slate-500">No tags found</p>
      )}
    </>
  );
};

export default Tags;
