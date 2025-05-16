import { FaLongArrowAltRight } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { IoIosHeart } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

interface CloseSideBarProps {
  onClick: () => void;
}

const CloseSideBar = ({ onClick }: CloseSideBarProps) => {
  return (
    <div className="flex flex-col  gap-10 border  border-slate-300 dark:bg-slate-800 dark:border-none shadow-lg w-14 h-screen p-7 rounded-lg">
      <div className="flex flex-col items-center gap-10">
        <button
          aria-label="close-sidebar"
          name="close-sidebar"
          type="button"
          onClick={onClick}
          className=" hover:bg-blue-500 p-2 hover:text-white  rounded-lg cursor-pointer"
        >
          <FaLongArrowAltRight size={25} className="dark:text-slate-300" />
        </button>

        <div className=" flex flex-col gap-10">
          <div className=" relative group hover:bg-blue-500 p-2 hover:text-white  rounded-lg cursor-pointer">
            <span className=" absolute top-[-34px] text-center right-[-6px] text-white bg-black p-1 text-sm rounded-full opacity-0 group-hover:opacity-100 ">
              Create
            </span>
            <Link href="/create">
              <IoMdCreate size={25} />
            </Link>
          </div>
          <div className=" relative group hover:bg-blue-500 p-2 hover:text-white  rounded-lg cursor-pointer">
            <span className=" absolute top-[-34px] text-center right-[-9px] text-white bg-black p-1 text-sm rounded-full opacity-0 group-hover:opacity-100 ">
              Snippets
            </span>
            <Link href="/dashboard">
              <AiFillAppstore size={25} />
            </Link>
          </div>
          <div className=" relative group hover:bg-blue-500 p-2 hover:text-red-500  rounded-lg cursor-pointer">
            <span className=" absolute top-[-34px] text-center right-[-8px] text-white bg-black p-1 text-sm rounded-full opacity-0 group-hover:opacity-100 ">
              Favorits
            </span>
            <Link href="/favorits">
              <IoIosHeart size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-auto flex justify-center items-center  ">
        <UserButton />
      </div>
    </div>
  );
};
export default CloseSideBar;
