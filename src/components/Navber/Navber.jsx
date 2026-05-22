import React, { useState } from "react";
import navLogo from "../../assets/Images/logo.png";
import coinLogo from "../../assets/Images/Coin.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navber = ({ coin }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="navbar bg-base-100 shadow-sm rounded-xl px-4 md:px-6 flex justify-between items-center relative">
        {/* Left Side: Logo */}
        <div className="">
          <img
            className="h-11 md:h-13 w-auto object-contain"
            src={navLogo}
            alt="nav-logo"
          />
        </div>

        {/* Right Side: Menu Items & Coin Button */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 lg:gap-8 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-black transition-colors">
              Home
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              Fixture
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              Teams
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              Schedules
            </li>
          </ul>

          {/* Coin Status Button */}
          <div className="flex-none">
            <button className="btn border border-gray-200 rounded-xl font-bold flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white hover:bg-gray-50 transition-all shadow-sm">
              <span>{coin} Coin</span>
              <img
                className="h-5 w-5 object-contain"
                src={coinLogo}
                alt="coin"
              />
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none p-1 text-xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-50 bg-white/90 shadow-md rounded-xl p-4 border border-gray-100 z-50 md:hidden animate-fadeIn">
            <ul className="flex flex-col gap-4 text-gray-700 font-medium text-center">
              <li
                className="hover:bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </li>
              <li
                className="hover:bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Fixture
              </li>
              <li
                className="hover:bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Teams
              </li>
              <li
                className="hover:bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Schedules
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
