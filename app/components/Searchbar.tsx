import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div className="relative flex items-center ">
      <span className="absolute left-4">
        <CiSearch size={25} />
      </span>
      <input
        className="py-2 pl-10 pr-4 border border-slate-400 rounded-lg w-[600px] "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};
export default Searchbar;
