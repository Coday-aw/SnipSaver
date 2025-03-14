"use client";

import { ActiveLinkProvider } from "../context/ActiveLinkContext";
import { useState } from "react";
import CloseSideBar from "./CloseSideBar";
import OpenSideBar from "./OpenSideBar";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ActiveLinkProvider>
      {!isOpen ? (
        <CloseSideBar onClick={toggleSidebar} />
      ) : (
        <OpenSideBar onClick={toggleSidebar} />
      )}
    </ActiveLinkProvider>
  );
};
export default Sidebar;
