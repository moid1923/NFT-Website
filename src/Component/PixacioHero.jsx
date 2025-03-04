import React from "react";
import pixacio from "../assets/pixaciohero.jfif";
import joty from "../assets/joty.png";
import { FaTwitter, FaDiscord, FaGithub, FaChrome } from "react-icons/fa";
function PixacioHero({image = pixacio , title = "Pixacio" }) {
  return (
    <div>
      <div className="container max-w-[1320px] w-full mx-auto flex flex-col lg:flex-row gap-4 my-10">
        <div className="p-[15px] bg-white rounded-2xl flex items-center justify-center mx-auto   max-w-[512px] max-h-[491px] h-full box-border">
          <img
            src={image}
            alt=""
            className="rounded-xl object-cover w-[482px] h-[461px]"
          />
        </div>
        <div className="max-w-[704px] w-full  mx-auto xs:p-5 md:p-0">
          {/* Title */}
          <h1 className="text-4xl   font-apex md:text-[50px] text-[#2b2b2b] lg:text-[64px] font-normal  capitalize leading-[102px] tracking-[2.56px]">
            {title}
          </h1>

          {/* Stats Section */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="p-3  bg-white rounded-lg flex justify-between items-center shadow-sm">
              <span className="text-[#808080] text-sm font-normal font-roboto  tracking-wide">Items listed</span>
              <span className=" text-right text-[#808080] text-sm font-bold font-roboto tracking-wide]">3,027</span>
            </div>
            <div className="p-3  bg-white rounded-lg flex justify-between items-center shadow-sm">
              <span className="text-[#808080] text-sm font-normal font-roboto tracking-wide">
                Num of Sold Items
              </span>
              <span className="text-right text-[#808080] text-sm font-bold font-['Roboto'] tracking-wide">120</span>
            </div>
            <div className="p-3 bg-white rounded-lg flex justify-between items-center shadow-sm ">
              <span className="text-[#808080] text-sm font-normal font-roboto tracking-wide">Vol FRY</span>
              <span className="text-right text-[#808080] text-sm font-bold font-['Roboto'] tracking-wide">18.5 FRY</span>
            </div>
          </div>
          <hr className="mt-10 text-red-500" />
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mt-6">
            <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
              <FaChrome className="text-black" size={25} />
            </button>
            <button className="w-[116px] h-[41px] flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
              <FaTwitter className="text-black" size={27} />{" "}
              <span className="bg-[#ffcccc] px-3 py-1 w-[44px] text-[7.45px] rounded-sm">
                12.3k
              </span>
            </button>
            <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
              <FaDiscord className="text-black" size={25} />
            </button>
            <button className="w-[116px] h-[41px] flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
              <img src={joty} alt="" className="w-[23px] h-[23px]" />{" "}
              <span className="bg-[#ffcccc] px-3 py-1 w-[44px] text-[7.45px] rounded-sm">
                12.3k
              </span>
            </button>
          </div>

          {/* Description Text */}
          <p className="mt-6 text-[#808080] text-sm font-normal font-roboto tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod vulputate ipsum, non molestie magna facilisis a. Cras
            tincidunt sem sed lorem dapibus laoreet. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime quaerat fuga explicabo
            consequatur consectetur quam molestias nobis distinctio? Dolores,
            saepe. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Maiores vel esse praesentium ullam maxime, autem velit quibusdam
            facilis neque impedit!
          </p>
        </div>
      </div>
    </div>
  );
}

export default PixacioHero;
