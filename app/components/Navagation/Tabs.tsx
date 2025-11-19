"use client"
import { AiFillAppstore } from "react-icons/ai";
import { IoMdBookmark } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import Link from "next/link";
import {useActiveLink } from "../context/ActiveLinkContext";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Tabs = () => {
  const {user} = useUser()
  const { activeLink, setActiveLink } = useActiveLink();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname && pathname !== activeLink) {
      setActiveLink(pathname);
    }
  }, [pathname, activeLink, setActiveLink]);
  return (
      <div className={` flex flex-col gap-10 border  border-slate-300 bg-white dark:bg-slate-800 dark:border-none shadow-lg w-full h-14 p-2 lg:hidden fixed inset-x-o bottom-0 z-50 
      ${!user ? "hidden" : ""}`}>
        <div className=" flex justify-center items-center gap-15">
          <div
            className={`relative group hover:bg-linear-to-r from-blue-500 to-purple-600 p-2 hover:text-white  rounded-lg cursor-pointer ${
              activeLink === "/dashboard"
                ? "bg-linear-to-r from-blue-500 to-purple-600 text-white"
                : ""
            } `}
            onClick={() => setActiveLink("/dashboard")}
          >
            <span className=" absolute top-[-34px] text-center right-[-9px] text-white bg-black p-1 text-sm rounded-full opacity-0 group-hover:opacity-100 ">
              Snippets
            </span>
            <Link href="/dashboard">
              <AiFillAppstore size={25} />
            </Link>
          </div>

          <div
            className={` relative group hover:bg-linear-to-r from-blue-500 to-purple-600 p-2 hover:text-white  rounded-lg cursor-pointer ${
              activeLink === "/create"
                ? "bg-linear-to-r from-blue-500 to-purple-600 text-white"
                : ""
            }`}
            onClick={() => setActiveLink("/create")}
          >
            <span className=" absolute top-[-34px] text-center right-[-6px] text-white bg-black p-1 text-sm rounded-full opacity-0 group-hover:opacity-100 ">
              Create
            </span>
            <Link href="/create">
              <IoMdCreate size={25} />
            </Link>
          </div>

          <div
            className={`relative group hover:bg-linear-to-r from-blue-500 to-purple-600 p-2 hover:text-white  rounded-lg cursor-pointer ${
              activeLink === "/bookmark"
                ? "bg-linear-to-r from-blue-500 to-purple-600 text-white"
                : ""
            }`}
            onClick={() => setActiveLink("/bookmark")}
          >
            <span className=" absolute top-[-34px] text-center right-[-20px] text-white bg-black p-1 text-sm rounded-full opacity-0 group-hover:opacity-100 ">
              Bookmarked
            </span>
            <Link href="/bookmark">
              <IoMdBookmark size={25} />
            </Link>
          </div>
        </div>
    </div>
  );
};
export default Tabs;
