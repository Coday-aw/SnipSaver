import Link from "next/link";
import { LuComponent } from "react-icons/lu";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/dashboard" className="bg-blue-500 p-2 rounded-lg">
        <LuComponent size={30} color="white" />
      </Link>
      <div className="flex gap-1 text-2xl">
        <span className="text-blue-500 font-bold">Snip</span>
        <span className="text-slate-600 dark:text-slate-300">Saver</span>
      </div>
    </div>
  );
};
export default Logo;
