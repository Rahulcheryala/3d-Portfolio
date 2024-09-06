import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-fit px-4 py-2 rounded-lg bg-white font-bold shadow-md flex items-center justify-center outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
      >
        <p className="blue-gradient_text text-xl">RC</p>
      </NavLink>

      <nav className="flex gap-6 text-lg font-medium">
        <NavLink
          to="/about"
          className={`${
            pathname === "/about" ? "text-blue-500" : "text-gray-700"
          } outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full px-4 py-1`}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={`${
            pathname === "/projects" ? "text-blue-500" : "text-gray-700"
          } outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full px-4 py-1`}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={`${
            pathname === "/contact" ? "text-blue-500" : "text-gray-700"
          } outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full px-4 py-1`}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
