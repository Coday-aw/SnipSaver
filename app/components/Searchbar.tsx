"use client";
import { CiSearch } from "react-icons/ci";
import { useSnippets } from "./context/SnippetContext";

const Searchbar = () => {
  const { searchQuery, setSearchQuery } = useSnippets();
  return (   
   <div className="relative flex items-center w-full">
      <span className="absolute left-4">
        <CiSearch size={24} className="text-slate-400" />
      </span>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="py-3 pl-12 pr-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none transition-all w-full shadow-sm text-slate-800 dark:text-white"
        type="text"
        placeholder="Search snippets..."
      />
    </div>
  );
};
export default Searchbar;
