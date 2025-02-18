import React from 'react'
import pixacio from '../assets/pixaciohero.jfif'
import { FaTwitter, FaDiscord, FaGithub ,FaChrome} from "react-icons/fa";
function PixacioHero() {
  return (
    <div>
      <div className="container max-w-[1320px] w-full mx-auto flex flex-col lg:flex-row gap-4">
        <div className="image] flex items-center justify-center mx-auto">
           <div className='p-[10px] bg-white rounded-2xl max-w-[512px] '>
           <img src={pixacio} alt="" className='rounded-xl object-cover' />
           </div>
        </div>
        <div className="max-w-[674px]  mx-auto xs:p-5 md:p-0">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-wide font-apex md:text-[64px] leading-[102px]">PIXACIO</h1>

      {/* Stats Section */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-3  bg-white rounded-lg flex justify-between items-center shadow-sm">
          <span className="text-gray-600 text-[14px]">Items listed</span>
          <span className=" text-[14px]">3,027</span>
        </div>
        <div className="p-3  bg-white rounded-lg flex justify-between items-center shadow-sm">
          <span className="text-gray-600 text-[14px]">Num of Sold Items</span>
          <span className="text-[14px]">120</span>
        </div>
        <div className="p-3 bg-white rounded-lg flex justify-between items-center shadow-sm ">
          <span className="text-gray-600 text-[14px]">Vol FRY</span>
          <span className="text-[14px]">18.5 FRY</span>
        </div>
      </div>
          <hr  className='mt-10 text-red-500'/>
      {/* Social Media Icons */}
      <div className="flex items-center space-x-4 mt-6">
      <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
          <FaChrome className="text-black" size={20} />
        </button>
        <button className="w-[116px] h-[41px] flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
          <FaTwitter className="text-black" size={20} /> <span className='bg-[#ffcccc] px-3 py-1 w-[44px] text-[7.45px]'>12.3k</span> 
        </button>
        <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
          <FaDiscord className="text-black" size={20}/>
        </button>
        <button className="w-[116px] h-[41px] flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
          <FaGithub className="text-black" size={20} /> <span className='bg-[#ffcccc] px-3 py-1 w-[44px] text-[7.45px]'>12.3k</span> 
        </button>
      </div>

      {/* Description Text */}
      <p className="mt-6 text-gray-600 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod
        vulputate ipsum, non molestie magna facilisis a. Cras tincidunt sem sed
        lorem dapibus laoreet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quaerat fuga explicabo consequatur consectetur quam molestias nobis distinctio? Dolores, saepe.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vel esse praesentium ullam maxime, autem velit quibusdam facilis neque impedit!
      </p>
    </div>
      </div>
    </div>
  )
}

export default PixacioHero
