import Sidebar from "../components/sidebar/Sidebar";
import Searchbar from "../components/Searchbar";
import { UserButton } from "@clerk/nextjs";
import Header from "./components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex p-2 ">
      <Sidebar />
      <div className="w-full p-4 rounded-lg">
        <Header />
        <div className="p-4 rounded-lg mt-2  ">{children}</div>
      </div>
    </div>
  );
};
export default layout;
