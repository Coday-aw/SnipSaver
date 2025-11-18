import { AiFillAppstore } from "react-icons/ai";
import { IoMdBookmark } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";
import { useActiveLink } from "@/app/components/context/ActiveLinkContext";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Links = () => {
  const { activeLink, setActiveLink } = useActiveLink();
  const pathname = usePathname()

  useEffect(()=> {
  if(pathname && pathname !== activeLink)
    {
      setActiveLink(pathname)
    }
  },[activeLink,pathname,setActiveLink])

  return (
    <div className="flex justify-center items-center flex-col gap-2  border-b py-4 mt-10 mb-10">
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
            activeLink === "/dashboard" ? "text-black dark:text-white" : ""
          }`}
        />
        All Snippets
      </Link>
      <Link
        href="/create"
        className={`flex group justify-start items-center gap-2 text-xl p-2 rounded-lg font-bold w-full ${
          activeLink === "/create"
            ? " bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-xl border border-blue-500/30 font-medium transition-all duration-200"
            : ""
        } hover:bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:text-blue-400 rounded-xl border border-blue-500/30 font-medium transition-all duration-200`}
        onClick={() => setActiveLink("/create")}
      >
        <IoIosAddCircle
          className={`group-hover:text-white ${
            activeLink === "/create" ? "text-black dark:text-white" : ""
          }`}
        />
        Create snippet
      </Link>
      <Link
        href="/bookmark"
        className={`group flex justify-start items-center text-xl gap-2 border p-2 rounded-lg font-bold w-full ${
          activeLink === "/bookmark"
            ? " bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-xl border border-blue-500/30 font-medium transition-all duration-200"
            : ""
        } hover:bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:text-blue-400 rounded-xl border border-blue-500/30 font-medium transition-all duration-200`}
        onClick={() => setActiveLink("/bookmark")}
      >
        <IoMdBookmark
          className={`group-hover:text-white ${
            activeLink === "/bookmark" ? "text-black dark:text-white" : ""
          }`}
        />
        Bookmarked
      </Link>
    </div>
  );
};

export default Links;

