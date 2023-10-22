import { Link, Outlet } from "react-router-dom";
import { logo } from "../assets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div className="flex gap-5">
          <Link
            to="/newpost"
            className="font-inter font-medium bg-[#0E0908] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
          {/* <button className="font-inter font-medium bg-[#0E0908] text-white px-4 py-2 rounded-md">
            Login
          </button> */}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  );
};

export default Layout;
