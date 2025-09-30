import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Contact", path: "/contact" },
];

const LandingPageNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="TrafficSaathi.jpg"
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold text-[#1D3557] tracking-wide">
            Traffic Saathi
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-gray-700 font-medium hover:text-blue-600 transition duration-200"
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Login Button (desktop) */}
        <Link
          to="/login"
          className="hidden md:inline-block ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 transition-transform duration-200 hover:scale-105"
        >
          Login
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl text-[#1D3557]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md shadow-lg px-6 py-6 flex flex-col gap-4 animate-slideDown">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 text-center"
          >
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default LandingPageNavbar;
