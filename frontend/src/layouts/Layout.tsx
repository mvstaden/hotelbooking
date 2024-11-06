import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <section>
        <Header />
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
