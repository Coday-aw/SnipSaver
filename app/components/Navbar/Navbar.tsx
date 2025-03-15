import AuthButtons from "./AuthButtons";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className=" dark:bg-slate-800 p-1 sticky top-0 z-10">
      <div className="flex justify-between items-center gap-4 my-3 mx-8">
        <Logo />
        <AuthButtons />
      </div>
    </div>
  );
};
export default Navbar;
