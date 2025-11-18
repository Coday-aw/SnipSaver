"use client";
import { CiSearch } from "react-icons/ci";
import { useSnippets } from "./context/SnippetContext";

const Searchbar = () => {
  const { searchQuery, setSearchQuery } = useSnippets();
  return (   
   <div className="relative flex items-center">
      <span className="absolute left-4">
        <CiSearch size={25} className=" dark:text-white" />
      </span>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="py-2 pl-10 pr-4 border border-slate-400 rounded-lg lg:w-[500px] md:w-[300px]  sm:w-[100px] w-full dark:text-white "
        type="text"
        placeholder="Search..."
      />
    </div>
  
  
  );
};
export default Searchbar;
