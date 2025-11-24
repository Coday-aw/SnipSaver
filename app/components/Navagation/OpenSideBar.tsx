"use client";
import Logo from "./Logo";
import Links from "./Links";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import Button from "../Button";
import { ActiveLinkProvider } from "../context/ActiveLinkContext";

function OpenSideBar() {
  return (
    <ActiveLinkProvider>


    

      <div className=" flex flex-col gap-10 border border-slate-300 dark:border-none  shadow-lg w-64 h-screen p-7 rounded-lg dark:bg-slate-800">
        <Logo/>
        <Button width="full" height="500">
          <Link className="text-xl" href="/create">
            Create snippet
          </Link>
        </Button>
        <Links />
        {/* <Languages /> */}
        <div className="mt-auto flex justify-center items-center dark:bg-slate-500 hover:bg-slate-100 p-2 rounded-lg">
          <UserButton showName />
        </div>
      </div>
    </ActiveLinkProvider>
  );
}
export default OpenSideBar;
