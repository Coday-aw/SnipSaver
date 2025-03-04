"use client";
import Logo from "@/app/components/Navbar/Logo";
import Links from "./Links";
import Link from "next/link";
import Languages from "./Languages";
import { ActiveLinkProvider } from "../ActiveLinkContext";
import Button from "@/app/(pages)/components/Button";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { IoIosHeart } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import CloseMenuLinks from "./CloseMenuLinks";

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
        <div className=" flex flex-col gap-10 border bg-slate-100 border-slate-200 shadow-lg w-64 h-screen p-7 rounded-lg">
          <div className="flex justify-center items-center gap-2">
            <Logo />
            <button
              className=" hover:bg-blue-500 hover:text-white p-2 rounded-lg cursor-pointer"
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
        </div>
      )}
    </ActiveLinkProvider>
  );
};
export default Sidebar;
