"use client";
import Links from "./Links";
import { ActiveLinkProvider } from "../context/ActiveLinkContext"
import Tags from "../Tags";
import Logo from "./Logo";

function SideBar() {
  return (
    <ActiveLinkProvider>
      <div className="flex-col border border-slate-300 dark:border-none shadow-lg w-64 h-screen p-4 rounded-lg dark:bg-slate-800 hidden lg:flex">
       <Logo/>
        <Links />
        <p className="text-xl p-2 font-bold">Tags</p>
        <Tags/>
      </div>
    </ActiveLinkProvider>
  );
}
export default SideBar;
