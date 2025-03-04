"use client";
import { CiSearch } from "react-icons/ci";
import { useSnippets } from "../components/SnippetContext";

const Searchbar = () => {
  const { searchQuery, setSearchQuery } = useSnippets();
  return (
    <div className="relative flex items-center ">
      <span className="absolute left-4">
        <CiSearch size={25} />
      </span>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="py-2 pl-10 pr-4 border border-slate-400 rounded-lg lg:w-[600px] md:w-[500px]  sm:w-full "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};
export default Searchbar;
