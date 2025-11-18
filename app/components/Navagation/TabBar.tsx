"use client";
import { ActiveLinkProvider } from "../context/ActiveLinkContext";
import Tabs from "./Tabs";



const TabBar = () => {
  return (
    <ActiveLinkProvider>
        <Tabs/>
    </ActiveLinkProvider>
  );
};
export default TabBar;
