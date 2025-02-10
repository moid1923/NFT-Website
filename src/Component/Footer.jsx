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
        <h2 className="md:text-[64px] text-[45px]  text-black font-apex">Ready for Next NFT Drop?</h2> 
        <div className=' max-w-[680px]  sm:mx-auto md:px-10 border border-red-400 rounded-lg mx-5 px-8'>
        <div className=" bg-transparent  flex justify-center items-center gap-2 relative max-w-[586px] h-[76px] mx-auto 
         rounded-lg">
          <input
            type="email"
            placeholder="info@gmail.com"
            className=" py-3 bg-transparent text-red-500 borde  focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-300 w-full  xs:w-[96%]"
          />
          <button className="bg-red-500 p-[10px] rounded-lg text-white shadow-md absolute right-0 md:right-3">
            <FaTelegramPlane size={20} />
          </button>
        </div>
        </div>
      
      </div>

      {/* Footer Content */}
      <div className="relative bg-cover  bg-center max-w-[1320px] w-full mx-auto rounded-t-3xl p-8 my-2" style={{ backgroundImage: `url(${mask})` }}>
        <div className=" mx-auto  flex  flex-col md:flex-row items-center justify-evenly ">
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
