import { MenuIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="py-4 flex justify-center bg-[#0B0B0B] text-white">
      <div className="container px-1 max-w-6xlgxl">
        <div className="grid grid-cols-2 border border-red/15 p-2 rounded-full items-center gap-3">
          {/* LEFT MENU */}
          <div className="flex items-center gap-2">
            <img src="/metalogo.png" alt="Metalogic logo" className="size-8" />
            <span className="text-2xl font-bold">MetaLogic</span>
          </div>

          {/* MOBILE MENU ICON — Visible on Mobile, Hidden on sm+ */}
          <div className="flex justify-end items-center">
            <MenuIcon className="size-7 lg:hidden" />
            <span className="hidden lg:flex items-center gap-5 text-md font-semibold">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/aboutus">About Us</Link>
              <button className="border-white h-12 rounded-full px-6 font-medium bg-red-500 text-neutral-950">
                Contact Us
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
