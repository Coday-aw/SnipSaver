import Header from "../components/Header";
import { SnippetsProvider } from "../components/context/SnippetContext";
import Container from "../components/Container";
import SideBar from "../components/Navagation/SideBar"

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <SnippetsProvider>
        <div className="flex p-2 ">
         <SideBar/>
          <div className="w-full px-4 rounded-lg min-w-0">
            <Header/>
            <div className="py-2 rounded-lg mt-2">{children}</div>
          </div>
        </div>
      </SnippetsProvider>
    </Container>
  );
};
export default layout;
