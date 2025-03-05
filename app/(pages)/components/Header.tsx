import ModeToggle from "@/app/components/ModeToggle";
import Searchbar from "@/app/components/Searchbar";

const Header = () => {
  return (
    <div className="flex justify-between items-center border border-slate-300 dark:border-none  bg-slate-100 shadow-lg  p-4 gap-2 rounded-lg dark:bg-slate-800">
      <Searchbar />
      {/* <UserButton showName /> */}
      <ModeToggle />
    </div>
  );
};
export default Header;
