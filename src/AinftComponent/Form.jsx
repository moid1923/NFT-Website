import React from "react";
import formpic from "../assets/formpic.jfif";
import add from "../assets/add.svg";
import back from '../assets/back.png'
import { useNavigate } from "react-router-dom";
function Form({ showAfterChoose = true,btn = "Mint NFT" , showButn = false }) {
  const navigate = useNavigate(); // 🔹 Define navigate function

  const handleChooseClick = () => {
    navigate("/aichoose"); // 🔹 Navigate to /Choose Collection Page when clicked
  };
  const handleCreateNewCollectionClick = () => {
    navigate("/aicreate"); // 🔹 Navigate to /Choose Collection Page when clicked
  };
  const handleWillilamPage = ()=>{
    navigate("/aiwilliam")
  }
  const handleMint = ()=>{
    navigate("/aiart")   //navigate to /aiart page
  }
  const handletraits = ()=>{
    navigate("/trait")   //navigate to /aiart page
  }
  return (
    <div className="max-w-[1320px] w-full mx-auto p-4 sm:py-6 md:py-10 md:px-0 ">
      <div className="flex gap-[200px] mb-[30px] px-6 lg:px-0">
        <button
          className="bg-white w-[128px] h-[64px] rounded-[20px] text-[#2B2B2B] font-roboto text-[20px] font-normal tracking-[0.8px] capitalize flex items-center justify-center gap-2" 
          style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
        >
          <img src={back} alt="" />
          Back
        </button>
        <button className="` w-[129px] h-[51px] p-[10px]  gap-[10px] shrink-0` bg-white rounded-[15px] text-[#808080]  font-roboto text-[16px] font-normal border-[2.8px] border-solid border-[#E7E7E7]"
       
        >Single NFT</button>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row">
        <div>
        <div
          className="max-w-[296px] w-full h-[309px] p-5 rounded-[20px] mx-auto relative"
          style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
        >
          <img
            src={formpic}
            alt=""
            className="object-cover rounded-[20px] max-w-[256px] max-h-[269px] w-full h-full"
          />
          <p className="text-white font-apex text-[20px] font-normal leading-normal tracking-[0.8px] capitaliz 
 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Selected</p>
        </div>
        {showButn && (
        <div>
        <button
          className="bg-white w-[131px] h-[50px] rounded-[20px] text-[#2B2B2B] font-roboto text-base font-normal  capitalize tracking-wide mt-8" 
          style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
          onClick={handleWillilamPage}
        >
          Choose file
        </button>
        </div>
        )}
        </div>
        <form
          className="space-y-[29px] max-w-[994px] w-full sm:px-7 md:px-[88px] py-[35px]  sm:bg-white"
          sm:style={{ boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.20)" }}
        >
          <h2
            className="
text-[#2B2B2B] text-center font-apex text-[40px] font-normal leading-normal tracking-[1.6px] capitalize"
          >
            MINT YOUR NFT
          </h2>
          <div>
            <label className="block mb-[15px] text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Item Name*
            </label>
            <input
              type="text"
              placeholder="Name your NFT"
              className="w-full p-3 border rounded-[15px] text-[#808080] font-roboto text-[18px] font-normal tracking-[0.54px]"
              style={{ border: "2.8px solid #E7E7E7" }}
            />
          </div>
          <div>
            <label className="block mb-[15px] text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Token Symbol*
            </label>
            
            <div className="relative">
    {/* 🔹 Styled Dollar Sign */}
    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2B2B2B] font-roboto text-[18px] font-normal tracking-[0.54px]
">
      $
    </span>

    <input
      type="text"
      placeholder="CGPT, for example"
      className="w-full p-3 pl-8 border rounded-[15px] text-[#808080] font-roboto text-[18px] font-normal tracking-[0.54px]"
      style={{ border: "2.8px solid #E7E7E7" }}
    />
  </div>
          </div>
          <div>
            <label className="block mb-[15px] text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Description
            </label>
            <p className="text-[#2B2B2B] mb-[10px] font-roboto text-[18px] font-normal tracking-[0.54px]">
              The description will be included on the item's detail page
              underneath its image.
            </p>
            <textarea
              placeholder="Provide a detailed description of your item"
              className=" p-3 border rounded-[15px] text-[#808080] font-roboto text-[18px] font-normal tracking-[0.54px]
 h-[158px] max-w-[817px] w-full"
              rows="4"
              style={{ border: "2.8px solid #E7E7E7" }}
            ></textarea>
          </div>
          {showAfterChoose && (
            <>
          <div>
            <div className="flex items-center justify-between mb-[5px]">
              <label className="block max-w-[50%] w-full text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize ">
                Choose Collection
              </label>
              <label
                htmlFor=""
                className="opacity-80 text-[#808080] text-right font-roboto text-[18px] font-normal tracking-[0.72px] underline capitalize`"
                onClick={handleChooseClick}
              >
                Choose From Existed
              </label>
            </div>
            <p className="opacity-80 mb-[15px] text-[#808080] font-roboto text-[16px] font-normal tracking-[0.64px] capitalize`">
              (this is the collection where your item will appear)
            </p>
            <div className="flex w-full gap-4 items-center mt-2 flex-col md:flex-row">
              <div
                className="p-[15px] border rounded-[15px] text-center flex gap-3 items-center justify-start hover:bg-gray-100 md:max-w-[50%] w-full"
                style={{ border: "2.8px solid #E7E7E7" }}
                onClick={handleCreateNewCollectionClick}
              >
                <button className="w-[61px] h-[61px] rounded-[12px] bg-[#c1c1c1] flex items-center justify-center ">
                  <img src={add} alt="" className="w-[28px] h-[28px]" />
                </button>
                <div className="">
                  <label className="`text-[#2B2B2B] text-left font-roboto text-[18px] font-medium tracking-[0.54px]`"
                  
                  >
                    Create new collection
                  </label>
                  <p className="text-[#808080] text-left  font-roboto text-[14px] font-normal tracking-[0.42px] opacity-80">
                    type to create
                  </p>
                </div>
              </div>
              <div
                className="p-[15px] border rounded-[15px] shadow-md flex items-center gap-3 md:max-w-[50%] w-full"
                style={{ border: "2.8px solid #E7E7E7" }}
              >
                <img
                  src={formpic}
                  alt="Artwork"
                  className="w-[61px] h-[61px] rounded-[15px]"
                />
                <div>
                  <p className="text-[#2B2B2B] text-left font-roboto text-[18px] font-medium tracking-[0.54px]">
                    Wonderful Artwork
                  </p>
                  <p className="text-[#808080] font-roboto text-[14px] font-normal tracking-[0.42px] opacity-80">
                    Items{" "}
                    <span className="text-[#2B2B2B] font-roboto text-[14px] font-medium tracking-[0.42px] opacity-100">
                      1.5k
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-[15px] text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Add Traits
            </label>
            <p className="` mb-[10px] text-[#2B2B2B] font-roboto text-[18px] font-normal tracking-[0.54px]`">
              Traits describe attributes of your item. They appear as filters
              inside your collection page and are also listed out inside your
              item page.
            </p>
            <div
              className="px-[30px] py-[17px] border rounded-[15px] mb-3 flex justify-between items-center"
              style={{ border: "2.8px solid #E7E7E7" }}
            >
              <span className="`text-[#2B2B2B] font-roboto text-[18px] font-medium tracking-[0.54px]`">
                blue : fox
              </span>
              <button className="ml-2 text-red-500">✖</button>
            </div>
            <hr className="my-[25px] text-[#E7E7E7] bg-[#E7E7E7]" />
            <div className="bg-[#E7E7E7] px-[30px] py-[18px] w-[195px] h-[58px] rounded-[15px] flex gap-3">
              <button className="text-[#808080] font-roboto text-[18px] font-normal tracking-[0.54px] "
              onClick={handletraits}>
                Add Traits
              </button>
              <img src={add} alt="" className="w-[28px] h-[28px]" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="block text-[#2B2B2B] font-roboto text-[20px] font-medium tracking-[0.8px] capitalize">
              Royalties
            </label>
            <label className="relative inline-block w-[60px] h-[34px]">
              <input type="checkbox" className="hidden peer" />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] rounded-[34px] transition-all duration-400 peer-checked:bg-[#2196F3] peer-focus:ring peer-focus:ring-blue-300"></span>
              <span className="absolute h-[26px] w-[26px] bg-white rounded-full left-[4px] bottom-[4px] transition-transform duration-400 peer-checked:translate-x-[26px]"></span>
            </label>
          </div>
          </>
          )}
          <div className="flex justify-end">
            <button className="px-8 py-4 rounded-[8px] flex items-center bg-gradient-custom text-white text-center font-roboto text-[18px] font-medium capitalize hover:opacity-90"
            onClick={handleMint}
            >
              {btn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
