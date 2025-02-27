import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaWallet, FaPaintBrush } from "react-icons/fa";
import nni from '../assets/nni.jfif'
import logo from "../assets/Group.svg";
import MainBtn from "./MainBtn";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active state based on the current path
  const [active, setActive] = useState("");

  useEffect(() => {
    if (location.pathname === "/masterpiece") {
      setActive("AI NFT GENERATION");
    } else {
      setActive("Home");
    }
  }, [location.pathname]);


  const toggleMenu = () => {
    setSideMenu((prev) => !prev);
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
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-800">
            <li
              className={`cursor-pointer hover:text-red-500 font-bold text-[18px] transition py-3 px-2 duration-200 font-apex ${
                active === "Home" ? "border-b-3 border-[#DE0308] text-[#DE0308]" : ""
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer hover:text-red-500 text-[18px] py-3 px-2 transition duration-200 font-apex font-normal ${
                active === "AI NFT GENERATION" ? "border-b-3 border-[#DE0308] text-[#DE0308]" : ""
              }`}
              onClick={() => navigate("/masterpiece")}
            >
              AI NFT GENERATION
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {active === "AI NFT GENERATION" ? (
            <>
              <div className="py-4 px-[25px] bg-[#E7E7E7]  cursor-pointer hover:bg-red-500 hover:text-white transition rounded-[15px]">
                <FaWallet size={28} className="w-[26px] h-[26px]" />
              </div>
              <div className="py-4 px-[25px] bg-[#E7E7E7]  cursor-pointer hover:bg-red-500 hover:text-white transition rounded-[15px]">
                <img src={nni} alt="" className="w-[26px] h-[26px] rounded-full" />
              </div>
            </>
          ) : (
            <>
              <MainBtn />
              <button className="leading-[25px] font-[500] border border-red-500 cursor-pointer font-roboto text-[22px] text-red-500 px-8 py-4 rounded-lg hover:bg-red-500 hover:text-white transition">
                Create NFT
              </button>
            </>
          )}
        </div>



        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center p-2 text-gray-700 z-50"
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
                onClick={() => navigate("/")}
                className={`cursor-pointer hover:text-red-500 transition duration-200 ${
                  active === "Home" ? "border-b-2 border-red-500" : ""
                }`}
              >
                Home
              </li>
              <li
                onClick={() => navigate("/masterpiece")}
                className={`cursor-pointer hover:text-red-500 transition duration-200 ${
                  active === "AI NFT GENERATION" ? "border-b-2 border-red-500" : ""
                }`}
              >
                AI NFT GENERATION
              </li>
            </ul>

            <div className="mt-6 flex flex-col space-y-4 px-6">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition duration-200 font-apex">
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
