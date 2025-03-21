import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from "react-icons/fa6";                           
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
        <h2 className="md:text-[64px] sm:text-[45px] text-[25px]  mb-[10px] font-bold leading-[130px] font-oxanion ">
          Ready For Next NFT Drop?
        </h2>
        <div className="max-w-[586px] sm:mx-auto relative md:px-10 border border-red-400 rounded-lg mx-5 px-8 xs:mx-1">
          <div
            className="bg-transparent flex justify-between md:justify-center items-center gap-2   max-w-[430px] md:h-[76px]  rounded-lg"
          >
            <input
              type="email"
              placeholder="info@gmail.com"
              className="py-3 text-[24px] bg-transparent text-red-500 placeholder-[#fe4b4b]  w-full xs:max-w-[230px] sm:max-w-[500px] focus:outline-none"
            />
            <button className="bg-red-500  py-3 px-4 rounded-lg text-white shadow-md absolute right-2 md:right-5 w-[10] h-[10]">
              <FaTelegramPlane size={20} md:size={40}/>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div
        className="relative bg-cover bg-center max-w-[1320px] w-full mx-auto rounded-t-3xl lg:ps-[172px] px-16 md:pe-[84px]  py-[47px] my-2"
        style={{ backgroundImage: `url(${mask})` }}
      >
        <div className="mx-auto flex flex-col items-center justify-center text-center md:flex-row md:flex-wrap  md:items-start max-w-[1064px]   md:justify-between  md:text-left py-4">
          {/* Left Section */}
          <div className="flex">
            <img
              src={logo}
              alt="Fry Networks"
              className="lg:h-[135px] lg:w-[195px] mx-auto md:mx-0 md:mb-20 mb-6 xs:w-[135px] xs:h-[90px]"
            />
          </div>

          {/* Middle Section */}
          <div className="flex items-center justify-center">
            <div className="mx-auto">
              <p className="mt-4 font-roboto font-[500]  md:text-[20px] sm:text-[16px] text-[14px] tracking-wider text-white  xs:text-[16px] xs:mx-auto sx:mx-auto md:mx-[0px] leading-[36px]  max-w-[394px]">
                NFT ALGO is the world's leading NFTs marketplace where you can
                discover, sell and bid NFTs and get rich
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-2 justify-center md:justify-start mt-4 text-white ">
                {[FaFacebookF, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaGithub, FaTiktok, FaTelegramPlane].map((Icon, index) => (
                  <div key={index} className="bg-white text-orange-600 md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center rounded-lg">
                    <Icon className="cursor-pointer "size={22} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:mt-0 text-white me-5">
            <h3 className="text-lg font-semibold text-[24px]">About</h3>
            <ul className="mt-2  text-sm flex flex-wrap justify-between md:flex-col items-center md:items-start : md:gap-y-5  ">
              {['About NFT', 'Live Auctions', 'Collection', 'Activity'].map((item, index) => (
                <li key={index} className="cursor-pointer hover:underline md:text-[20px] text-[12px]  font-normal mr-3">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;