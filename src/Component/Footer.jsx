import React from "react";
import {
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Github,
} from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import mask from "../assets/footer.png";
import logo from "../assets/flogo.png";
import { BsTiktok } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* Subscribe Section */}
      <div className="text-center py-10">
        <h2 className="md:text-[64px] sm:text-[45px] text-[25px] text-black font-apex mb-[10px]">
          Ready for Next NFT Drop?
        </h2>
        <div className=" max-w-[680px]  sm:mx-auto md:px-10 border border-red-400 rounded-lg mx-5 px-8">
          <div
            className=" bg-transparent  flex justify-center items-center gap-2 relative max-w-[586px] h-[76px] mx-auto 
         rounded-lg"
          >
            <input
              type="email"
              placeholder="info@gmail.com"
              className=" py-3 bg-transparent text-red-500 borde  w-full  xs:w-[96%] focus:outline-none "
            />
            <button className="bg-red-500 p-[10px] rounded-lg text-white shadow-md absolute right-0 md:right-3">
              <FaTelegramPlane size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div
        className="relative bg-cover  bg-center max-w-[1320px] w-full mx-auto rounded-t-3xl p-8 my-2"
        style={{ backgroundImage: `url(${mask})` }}
      >
        <div className=" mx-auto  flex  flex-col md:flex-row items-center justify-evenly ">
          {/* Left Section */}
          <div className="flex">
            <img
              src={logo}
              alt="Fry Networks"
              className="h-24 mx-auto md:mx-0 md:mb-20 mb-6"
            />
          </div>
          {/* middle Section */}
          <div className="flex items-center justify-center">
            <div>
              <p className="mt-4 max-w-xs text-[20px] text-white text-center md:text-left mb-12">
                NFT ALGO is the world’s leading NFTs marketplace where you can
                discover, sell and bid NFTs and get rich
              </p>
              <div className="flex gap-3 sm:gap-2 justify-center md:justify-start mt-4 text-white">
                <div className=" bg-white text-orange-600 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-center rounded-lg items-center flex justify-center">
                  {" "}
                  <Facebook className="cursor-pointer" />
                </div>
                <div className=" bg-white text-orange-600 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-center rounded-lg items-center flex justify-center">
                  <Twitter className="cursor-pointer" />{" "}
                </div>

                <div className=" bg-white text-orange-600 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-center rounded-lg items-center flex justify-center">
                  {" "}
                  <Linkedin className="cursor-pointer" />
                </div>
                <div className=" bg-white text-orange-600 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-center rounded-lg items-center flex justify-center">
                  {" "}
                  <Youtube className="cursor-pointer" />{" "}
                </div>
                <div className=" bg-white text-orange-600 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-center rounded-lg items-center flex justify-center">
                  {" "}
                  <Instagram className="cursor-pointer" />
                </div>
                <div className=" bg-white text-orange-600 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-center rounded-lg items-center flex justify-center">
                  {" "}
                  <Github className="cursor-pointer" />{" "}
                </div>

                <div className=" bg-white text-orange-600 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-center rounded-lg items-center flex justify-center">
                  {" "}
                  <FaTiktok className="cursor-pointer" />
                </div>
                <div className=" bg-white text-orange-600 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] text-center rounded-lg items-center flex justify-center">
                  {" "}
                  <FaTelegramPlane className="cursor-pointer" />{" "}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-6 md:mt-0 text-center md:text-left text-white">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="mt-2 space-y-1 text-sm flex gap-4 md:flex-col">
              <li className="cursor-pointer hover:underline">About NFT</li>
              <li className="cursor-pointer hover:underline">Live Auctions</li>
              <li className="cursor-pointer hover:underline">Collection</li>
              <li className="cursor-pointer hover:underline">Activity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
