import React from 'react';
import { Mail, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import mask from '../assets/footer.png';
import logo from '../assets/flogo.png';

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* Subscribe Section */}
      <div className="text-center py-10">
        <h2 className="text-[64px] font-bold text-black font-apex">Ready for Next NFT Drop?</h2> 
        <div className="mt-4 flex justify-center items-center gap-2 relative w-[680px] h-[96px] mx-auto">
          <input
            type="email"
            placeholder="info@gmail.com"
            className="px-6 py-3 text-red-500 border border-red-300  focus:outline-none w-full  shadow-sm"
          />
          <button className="bg-red-500 p-[10px] rounded-lg text-white shadow-md absolute right-4">
            <FaTelegramPlane size={20} />
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative bg-cover  bg-center max-w-[1320px] w-full mx-auto rounded-t-3xl p-8 my-2" style={{ backgroundImage: `url(${mask})` }}>
        <div className=" mx-auto  flex  flex-col md:flex-row items-center justify-between ">
          {/* Left Section */}
          <div className="flex">
            <img src={logo} alt="Fry Networks" className="h-12 mx-auto md:mx-0" />
           
          </div>
          {/* middle Section */}
          <div className='flex items-center justify-center'>
            <div>
            <p className="mt-4 max-w-xs text-sm text-white">
              NFT ALGO is the world’s leading NFTs marketplace where you can discover, sell and bid NFTs and get rich
            </p>
            <div className="flex gap-3 justify-center md:justify-start mt-4 text-white">
              <Facebook className="cursor-pointer" />
              <Twitter className="cursor-pointer" />
              <Linkedin className="cursor-pointer" />
              <Youtube className="cursor-pointer" />
              <Instagram className="cursor-pointer" />
              <FaTelegramPlane className="cursor-pointer" />
            </div>
            </div>
      
          </div>

          {/* Right Section */}
          <div className="mt-6 md:mt-0 text-center md:text-left text-white">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="mt-2 space-y-1 text-sm">
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
