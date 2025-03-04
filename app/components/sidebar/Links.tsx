import { AiFillAppstore } from "react-icons/ai";
import { IoIosHeart } from "react-icons/io";
import Link from "next/link";
import { useActiveLink } from "@/app/components/ActiveLinkContext";

const Links = () => {
  const { activeLink, setActiveLink } = useActiveLink();

  return (
    <div className="flex justify-center items-center flex-col gap-2 mt-10">
      <Link
        href="/dashboard"
        className={`flex justify-start items-center gap-2 border p-2 rounded-lg font-bold w-full ${
          activeLink === "/dashboard"
            ? "bg-blue-500 text-white border-none"
            : "border-black"
        } hover:bg-blue-500 hover:text-white hover:border-none`}
        onClick={() => setActiveLink("/dashboard")}
      >
        <AiFillAppstore />
        All Snippets
      </Link>
      <Link
        href="/favorits"
        className={`group flex justify-start items-center gap-2 border p-2 rounded-lg font-bold w-full ${
          activeLink === "/favorits"
            ? "bg-blue-500 text-white border-none"
            : "border-black"
        } hover:bg-blue-500 hover:text-white hover:border-none`}
        onClick={() => setActiveLink("/favorits")}
      >
        <IoIosHeart
          className={`group-hover:text-red-500 ${
            activeLink === "/favorits" ? "text-red-500" : ""
          }`}
        />
        Favorits
      </Link>
    </div>
  );
};

export default Links;
