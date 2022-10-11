import React from "react";
import { Outlet } from "react-router-dom";
import NavButtons from "./NavButtons";
import TopBar from "./TopBar";

const Layout = () => {
  return (
    <div className="flex flex-row p-[2%]">
      <NavButtons />
      <div className="px-[1%]">
        <TopBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
