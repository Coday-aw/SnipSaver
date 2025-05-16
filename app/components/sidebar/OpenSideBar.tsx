import Logo from "@/app/components/Navbar/Logo";
import Links from "./Links";
import Link from "next/link";
import Languages from "./Languages";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import Button from "@/app/(pages)/components/Button";

interface OpenSideBarProps {
  onClick: () => void;
}

function OpenSideBar({ onClick }: OpenSideBarProps) {
  return (
    <div className=" flex flex-col gap-10 border border-slate-300 dark:border-none  shadow-lg w-64 h-screen p-7 rounded-lg dark:bg-slate-800">
      <div className="flex justify-center items-center gap-2">
        <Logo />
        <button
          aria-label="open-sidebar"
          name="open-sidebar"
          type="button"
          className=" hover:bg-blue-500 hover:text-white p-2 rounded-lg cursor-pointer"
          onClick={onClick}
        >
          <FaLongArrowAltLeft size={25} />
        </button>
      </div>

      <Button width="full">
        <Link className="text-xl" href="/create">
          Create snippet
        </Link>
      </Button>
      <Links />
      <Languages />
      <div className="mt-auto flex justify-center items-center dark:bg-slate-500 hover:bg-slate-100 p-2 rounded-lg">
        <UserButton showName />
      </div>
    </div>
  );
}
export default OpenSideBar;
