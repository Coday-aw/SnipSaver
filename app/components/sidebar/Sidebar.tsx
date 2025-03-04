"use client";
import Logo from "@/app/components/Navbar/Logo";
import Links from "./Links";
import Link from "next/link";
import Languages from "./Languages";
import { ActiveLinkProvider } from "../ActiveLinkContext";
import Button from "@/app/(pages)/components/Button";

const Sidebar = () => {
  return (
    <ActiveLinkProvider>
      <div className=" flex flex-col gap-10 border bg-slate-100 border-slate-200 shadow-lg w-64 h-screen p-7 rounded-lg">
        <Logo />
        <Button width="full">
          <Link href="/create">Create snippet</Link>
        </Button>
        <Links />
        <Languages />
      </div>
    </ActiveLinkProvider>
  );
};
export default Sidebar;
