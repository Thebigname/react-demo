import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet, Route, Routes } from "react-router";

export default function Navbar() {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 transition-colors duration-200 ${
      isActive
        ? "bg-[#00df9a] rounded text-black "
        : "text-white hover:text-[#00df9a] rounded cursor-pointer p-2"
    }`;
  return (
    <div>
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] text-left">
        React.{" "}
      </h1>
      <ul className="hidden md:flex md:gap-2 ">
        <li>
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Company" className={linkClasses}>
            Company
          </NavLink>
        </li>
        <li>
          <NavLink to="/Resources" className={linkClasses}>
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className={linkClasses}>
            Contact
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="About" className={linkClasses}>
            About
          </NavLink>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000003] ease-in-out duration-700"
            : "fixed left-[-100%] ease-out"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] text-left pt-14 p-10">
          React.{" "}
        </h1>

        <ul className=" uppercase text-left p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4">About</li>
        </ul>
      </div>
    </div>
    <Outlet/>
    </div>
  );
}
