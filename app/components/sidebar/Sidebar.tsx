"use client";
import Logo from "@/app/components/Navbar/Logo";
import Links from "./Links";
import Link from "next/link";
import Languages from "./Languages";
import { ActiveLinkProvider } from "../context/ActiveLinkContext";
import Button from "@/app/(pages)/components/Button";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import CloseMenuLinks from "./CloseMenuLinks";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ActiveLinkProvider>
      {!isOpen ? (
        <CloseMenuLinks onClick={toggleSidebar} />
      ) : (
        <div className=" flex flex-col gap-10 border border-slate-300 dark:border-none  shadow-lg w-64 h-screen p-7 rounded-lg dark:bg-slate-800">
          <div className="flex justify-center items-center gap-2">
            <Logo />
            <button
              className=" hover:bg-blue-500 hover:text-white dark:text-slate-300 p-2 rounded-lg cursor-pointer"
              onClick={toggleSidebar}
            >
              <FaLongArrowAltLeft size={25} />
            </button>
          </div>

          <Button width="full">
            <Link href="/create">Create snippet</Link>
          </Button>
          <Links />
          <Languages />
          <div className="mt-auto flex justify-center items-center dark:bg-slate-500 hover:bg-slate-100 p-2 rounded-lg">
            <UserButton showName />
          </div>
        </div>
      )}
    </ActiveLinkProvider>
  );
};
export default Sidebar;
