import Searchbar from "@/app/components/Searchbar";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between border bg-slate-100 border-slate-200 shadow-lg  p-4 rounded-lg">
      <Searchbar />
      <UserButton showName />
    </div>
  );
};
export default Header;
