"use client"
import ModeToggle from "@/app/components/ModeToggle";
import Searchbar from "@/app/components/Searchbar";
import Logo from "./Navagation/Logo";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex  justify-between items-center border border-slate-300 dark:border-none  shadow-lg  p-4 gap-2 rounded-lg dark:bg-slate-800">
      <Searchbar />
      <div className="flex justify-center items-center gap-4">
        <ModeToggle />
        <UserButton/>
      </div>
    </div>
  );
};
export default Header;
