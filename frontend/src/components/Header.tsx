import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <h2 className="text-2xl text-white font-bold tracking-tight">
          <Link to="/">Booking App</Link>
        </h2>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center bg-white text-blue-600 px-3 font-bold hover:bg-gray-100">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Header;
