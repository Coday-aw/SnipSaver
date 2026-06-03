import ModeToggle from "@/app/components/ModeToggle";
import Logo from "./Navagation/Logo";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between items-center glass-card p-4 gap-2 rounded-2xl sticky top-4 z-40 lg:hidden">
      <Logo />
      <div className="hidden lg:block flex-1" /> {/* Spacer on desktop */}
      <div className="flex justify-center items-center gap-4 ml-auto">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};
export default Header;
