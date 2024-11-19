import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 px-8 flex-1">
        <h1 className="text-3xl">YOUTUBE: 5:46:45</h1>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
