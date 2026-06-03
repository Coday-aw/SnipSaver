import Links from "./Links";
import { ActiveLinkProvider } from "../context/ActiveLinkContext"
import Logo from "./Logo";
import ModeToggle from "../ModeToggle";
import { UserButton } from "@clerk/nextjs";

function SideBar() {
  return (
    <ActiveLinkProvider>
      <div className="flex-col border border-slate-300 dark:border-none shadow-lg w-64 h-[calc(100vh-2rem)] sticky top-4 p-4 rounded-lg dark:bg-slate-800 hidden lg:flex overflow-y-auto">
        <Logo />
        <Links />
        <div className="flex justify-between items-center gap-4 p-4 mt-auto">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </ActiveLinkProvider>
  );
}
export default SideBar;
