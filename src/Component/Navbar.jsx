import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/Group.svg";
import MainBtn from "./MainBtn";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  const [active, setActive] = useState("Home"); 

  const toggleMenu = () => {
    setSideMenu((prev) => !prev);
  };

  const handleMenuClick = (menuItem) => {
    setActive(menuItem);
    setSideMenu(false); 
  };

  return (
    <div className="relative w-full">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 max-w-[1320px] mx-auto sticky left-0 top-0">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="md:w-[100px] md:h-[100px] object-cover cursor-pointer w-[75px] h-[75px]"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-800">
            <li
              className={`cursor-pointer hover:text-red-500 transition py-3 duration-200 ${
                active === "Home" ? "border-b-3 border-red-500 text-red-500" : ""
              }`}
              onClick={() => handleMenuClick("Home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer hover:text-red-500 py-3 transition duration-200 ${
                active === "AI NFT GENERATION" ? "border-b-3 border-red-500 text-red-500" : ""
              }`}
              onClick={() => handleMenuClick("AI NFT GENERATION")}
            >
              AI NFT GENERATION
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <MainBtn />
          <button className="border border-red-500 cursor-pointer text-red-500 px-6 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-200">
            Create NFT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center p-2 text-gray-700 z-50"
          title="Menu"
        >
          <HiMenu size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {sideMenu && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu}>
          <div
            className="absolute top-0 left-0 w-64 h-full bg-white shadow-md z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <img
                src={logo}
                alt="Logo"
                className="w-[100px] h-[100px] object-cover"
              />
              <button
                onClick={toggleMenu}
                className="md:hidden flex items-center p-2 text-gray-700 z-50"
                title="Menu"
              >
                {sideMenu ? <IoClose size={28} /> : <HiMenu size={28} />}
              </button>
            </div>

            <ul className="flex flex-col items-start p-6 space-y-4 text-sm font-medium text-gray-800 mt-[20px]">
              <li
                onClick={() => handleMenuClick("Home")}
                className={`cursor-pointer hover:text-red-500 transition duration-200 ${
                  active === "Home" ? "border-b-2 border-red-500" : ""
                }`}
              >
                Home
              </li>
              <li
                onClick={() => handleMenuClick("AI NFT GENERATION")}
                className={`cursor-pointer hover:text-red-500 transition duration-200 ${
                  active === "AI NFT GENERATION" ? "border-b-2 border-red-500" : ""
                }`}
              >
                AI NFT GENERATION
              </li>
            </ul>

            <div className="mt-6 flex flex-col space-y-4 px-6">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition duration-200">
                Connect Wallet
              </button>
              <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-200">
                Create NFT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
