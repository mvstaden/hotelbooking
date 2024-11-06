import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 p-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Mern Booking</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="bg-white text-blue-500 cursor-pointer p-2 font-bold ">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
