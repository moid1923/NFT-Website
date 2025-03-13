import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import hm from "../assets/NFThero.png";
import masup from "../assets/masup.png";
import masbot from "../assets/masbot.png";
import generate from "../assets/generate.png";
import { useNavigate } from "react-router-dom";
function NftHero() {
  const [supply, setSupply] = useState(10);

  const increment = () => setSupply(supply + 1);
  const decrement = () => setSupply(supply > 1 ? supply - 1 : 1);

  const navigate = useNavigate(); // 🔹 Define navigate function
  const handlestyle = () => {
    navigate("/style");
  };
  const handleGenerate = () => {
    navigate("/generate");
  };
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "Single NFT") {
      navigate("/aicard");
    } else if (selectedValue === "Multiple NFTs") {
      navigate("/aicardtwo");
    }
  };
  return (
    <div>
      <div className="max-w-[1320px] w-full mx-auto mt-[85px]">
        <div className="heading">
          <p className="text-[#2B2B2B] text-center font-apex text-[64px] font-bold leading-normal tracking-[2.56px] capitalize">
            Create your own{" "}
            <span className="font-bold text-[#FE0101] relative">
              <img
                src={masup}
                alt=""
                className="absolute right-[300px] -top-[20px] hidden lg:block"
              />
              masterpiece
              <img
                src={masbot}
                alt=""
                className="absolute -right-8 top-5 hidden lg:block"
              />
            </span>
          </p>
        </div>
        <div className="image">
          <img src={hm} alt="" className="object-cover h-[496px] shrink-0" />
        </div>
      </div>
      <p className="text-[#808080] font-roboto text-[16px] font-normal leading-normal capitalize text-center -mt-5">
        get onboard and earn money like a pro
      </p>
      <div className="p-6 rounded-lg flex flex-col gap-4">
        {/* Prompt Input and Generate Button */}
        <div className="relative w-full max-w-[1002px] h-[70px] mx-auto bg-white rounded-md flex items-center shadow-lg px-4 border-[3px] border-solid border-[#E7E7E7]">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-[80%] h-full pl-5 pr-20 py-3 border-none focus:outline-none  sm:text-[14px] font-roboto text-[#808080] font-roboto text-[18px] font-normal leading-normal tracking-[0.54px]"
          />
          <button
            className="absolute w-[119px] h-[50px] right-4 bg-[#FE0101] text-white py-2 rounded-[15px] 
  hover:bg-red-600 shadow-lg transition sm:text-[18px] text-center font-roboto 
  text-[18px] font-bold leading-normal flex items-center justify-center gap-2 "
            onClick={handleGenerate}
          >
            Generate <img src={generate} alt="" className="w-5 h-5" />
          </button>
        </div>

        {/* Dropdown, Number Input, and Add Styles */}
        <div className="max-w-[715px] w-full mx-auto flex flex-wrap items-center justify-between gap-4">
          <select
            className="bg-white border border-[#E7E7E7] px-[30px] py-[15px] appearance-none rounded-md text-[#808080] font-roboto text-[18px] font-normal leading-normal tracking-[0.54px]"
            onClick={handleSelectChange}
          >
            <option className="">Select Option </option>
            <option className="">Single NFT </option>
            <option>Multiple NFTs</option>
          </select>

          <div className="flex flex-col sm:flex-row items-center gap-2 ">
            <span
              className=" me-5 text-[18px] text-[#808080] font-roboto font-normal leading-normal tracking-[0.54px]
"
            >
              Supply
            </span>
            <div className="w-[139px] h-[58px] bg-white flex justify-evenly items-center border border-[#E7E7E7] rounded-lg shadow-sm">
              <input
                type="number"
                value={supply}
                readOnly
                className="text-center w-[60px] appearance-none py-2 px-3 rounded-lg text-sm font-roboto bg-transparent outline-none"
              />
              <div className="flex flex-col gap-[1px]">
                <button
                  onClick={increment}
                  className="w-7 h-7 bg-white border border-[#E7E7E7] flex items-center justify-center"
                >
                  <FaChevronUp size={10} />
                </button>
                <button
                  onClick={decrement}
                  className="w-7 h-7 bg-white border border-[#E7E7E7] flex items-center justify-center"
                >
                  <FaChevronDown size={10} />
                </button>
              </div>
            </div>
          </div>

          <button
            className="border bg-white border-[#E7E7E7] px-[30px] py-[15px] rounded-md flex items-center gap-2 text-[#808080] font-roboto text-[18px] font-normal leading-normal tracking-[0.54px]"
            onClick={handlestyle}
          >
            Add Styles <FaPlus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NftHero;
