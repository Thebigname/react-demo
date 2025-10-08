import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";

export default function Navbar() {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  // Close mobile menu when link is clicked
  const closeMobileMenu = () => {
    setnav(false);
  };

  const linkClasses = ({ isActive }) =>
    `px-4 py-2 transition-colors duration-200 ${
      isActive
        ? "bg-[#00df9a] rounded text-black"
        : "text-white hover:text-[#00df9a] rounded cursor-pointer"
    }`;

  // Mobile link classes with active state
  const mobileLinkClasses = ({ isActive }) =>
    `block w-full ${
      isActive
        ? "text-[#00df9a] font-semibold"
        : "text-white hover:text-[#00df9a]"
    }`;

  return (
    <div>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] text-left">
          React.
        </h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:gap-2">
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
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className={linkClasses}>
              About
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer z-20">
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000003] ease-in-out duration-500 z-10"
              : "fixed left-[-100%] ease-out duration-500"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] text-left pt-14 p-10">
            React.
          </h1>

          <ul className="uppercase text-left p-4">
            <li className="p-4 border-b border-gray-600">
              <NavLink to="/" className={mobileLinkClasses} onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-600">
              <NavLink to="/Company" className={mobileLinkClasses} onClick={closeMobileMenu}>
                Company
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-600">
              <NavLink to="/Resources" className={mobileLinkClasses} onClick={closeMobileMenu}>
                Resources
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-600">
              <NavLink to="/Contact" className={mobileLinkClasses} onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink to="/About" className={mobileLinkClasses} onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Overlay - closes menu when clicking outside */}
        {nav && (
          <div
            className="fixed inset-0 bg-black/50 z-0 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </div>
      <Outlet />
    </div>
  );
}