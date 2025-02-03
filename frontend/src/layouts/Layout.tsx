import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const Layout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto">
        <SearchBar />
      </div>
      <div className="container mx-auto py-10 px-8 flex-1">
        <Outlet />
      </div>
      <Footer />
      <h1>Testing Commit on Mac</h1>
    </div>
  );
};

export default Layout;
