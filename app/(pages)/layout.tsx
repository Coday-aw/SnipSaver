import Sidebar from "../components/sidebar/Sidebar";
import Header from "./components/Header";
import { SnippetsProvider } from "../components/SnippetContext";

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <SnippetsProvider>
      <div className="flex p-2 ">
        <Sidebar />

        <div className="w-full p-4 rounded-lg">
          <Header />
          <div className="p-4 rounded-lg mt-2  ">{children}</div>
        </div>
      </div>
    </SnippetsProvider>
  );
};
export default layout;
