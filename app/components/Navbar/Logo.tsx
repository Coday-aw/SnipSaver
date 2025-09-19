import Link from "next/link";
import { LuComponent } from "react-icons/lu";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className=" p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <LuComponent size={30} color="white" />
      </div>
      <div className="flex gap-1 text-2xl">
        <span className="text-blue-500 font-bold">Snip</span>
        <span className="text-slate-600 dark:text-slate-300">Saver</span>
      </div>
    </div>
  );
};
export default Logo;
