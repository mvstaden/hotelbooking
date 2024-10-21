import React from "react";
import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
