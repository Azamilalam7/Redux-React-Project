import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
      {/* Left side — Dashboard button */}
      <Link
        to="/dashboard"
        className="bg-black text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105"
      >
        Dashboard
      </Link>

      {/* Right side — Navigation links */}
      <div className="flex gap-6 text-gray-700 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-all hover:text-black ${
              isActive ? "font-bold text-black" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `transition-all hover:text-black ${
              isActive ? "font-bold text-black" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `transition-all hover:text-black ${
              isActive ? "font-bold text-black" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
