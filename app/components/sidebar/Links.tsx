import { AiFillAppstore } from "react-icons/ai";
import { IoMdBookmark } from "react-icons/io";
import Link from "next/link";
import { useActiveLink } from "@/app/components/context/ActiveLinkContext";

const Links = () => {
  const { activeLink, setActiveLink } = useActiveLink();

  return (
    <div className="flex justify-center items-center flex-col gap-2 mt-10">
      <Link
        href="/dashboard"
        className={`flex group justify-start items-center gap-2 text-xl p-2 rounded-lg font-bold w-full ${
          activeLink === "/dashboard"
            ? " bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-xl border border-blue-500/30 font-medium transition-all duration-200"
            : ""
        } hover:bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:text-blue-400 rounded-xl border border-blue-500/30 font-medium transition-all duration-200`}
        onClick={() => setActiveLink("/dashboard")}
      >
        <AiFillAppstore
          className={`group-hover:text-white ${
            activeLink === "/dashboard" ? "text-white" : ""
          }`}
        />
        All Snippets
      </Link>
      <Link
        href="/favorits"
        className={`group flex justify-start items-center text-xl gap-2 border p-2 rounded-lg font-bold w-full ${
          activeLink === "/favorits"
            ? " bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-xl border border-blue-500/30 font-medium transition-all duration-200"
            : ""
        } hover:bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:text-blue-400 rounded-xl border border-blue-500/30 font-medium transition-all duration-200`}
        onClick={() => setActiveLink("/favorits")}
      >
        <IoMdBookmark
          className={`group-hover:text-white ${
            activeLink === "/favorits" ? "text-white" : ""
          }`}
        />
        Bookmarked
      </Link>
    </div>
  );
};

export default Links;
