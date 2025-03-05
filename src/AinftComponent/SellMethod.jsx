import React from "react";
import fixprice from "../assets/lpfix.png";
import auc from "../assets/lpauc.png";
import sideimg from "../assets/lpimg.png";
import backicon from "../assets/back.png";
import frylogo from "../assets/felogo.png";
import inp from "../assets/input.png";
import tick from '../assets/lptick.png'

function SellMethod({ showtick = true, selectedMethod = "Fixed Price" }) {
  return (
    <div className="max-w-[1320px] mx-auto p-2 md:p-6 h-auto min-h-screen overflow-y-auto">
      {/* Back Button */}
      <button className="flex items-center justify-center gap-2 mb- w-[126px] h-16 bg-white rounded-[20px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] ms-6">
        <img src={backicon} alt="Back" className="w-6 h-6" />
        <span className="text-[#2b2b2b] text-xl font-normal font-roboto capitalize tracking-wide">Back</span>
      </button>

      {/* Container */}
      <div className="flex flex-col lg:flex-row gap-[30px] max-w-[1320px] w-full rounded-lg p-6">
        {/* Preview Section */}
        <div className="w-full md:w-[296px] mx-auto">
          <div className="flex flex-col gap-4 items-center w-full md:w-[296px] min-h-[309px] bg-white rounded-[20px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] p-5">
            <img
              src={sideimg}
              alt="Preview Your Item"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="text-[#2b2b2b] text-[22px] font-medium font-roboto capitalize tracking-wide text-center my-[25px]">Preview Your Item</p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full pb-10 md:max-w-[994px] bg-white px-4 sm:px-6 md:px-[88px] mx-auto shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)] rounded-[20px]">
          <h2 className="text-center text-[#2b2b2b] text-[40px] font-normal font-apex capitalize tracking-wider my-[35px]">ROYAL SAMURAI</h2>
          <p className="text-[#2b2b2b] text-[26px] font-semibold font-['Roboto'] capitalize tracking-wide my-[25px]">Select Your Sell Method</p>

          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div
              className={`flex flex-col items-center gap-3 justify-center p-4 w-full sm:w-[207.87px] h-[217px] rounded-[14.05px] shadow-[2.8090615272521973px_2.8090615272521973px_10.533980369567871px_0px_rgba(0,0,0,0.20)] relative ${selectedMethod === "Fixed Price" ? "bg-[#f4f3f3]" : "bg-white"}`}
            >
              <div className="bg-[#45adeb] w-[99px] h-[99px] rounded-full flex items-center justify-center">
                <img
                  src={fixprice}
                  alt="Fixed Price"
                  className="w-[50px] h-[50px] mb-2"
                />
              </div>
              <span className="text-[#2b2b2b] text-xl font-medium font-roboto capitalize tracking-wide">Fixed Price</span>
              {selectedMethod === "Fixed Price" && showtick && (
                <span><img src={tick} alt="" className="w-6 h-6 absolute right-2 top-2" /></span>
              )}
            </div>

            <div
              className={`flex flex-col items-center gap-3 justify-center p-4 w-full sm:w-[207.87px] h-[217px] rounded-[14.05px] shadow-[2.8090615272521973px_2.8090615272521973px_10.533980369567871px_0px_rgba(0,0,0,0.20)] relative ${selectedMethod === "Auction" ? "bg-[#f4f3f3]" : "bg-white"}`}
            >
              <div className="bg-[#f7a940] w-[99px] h-[99px] rounded-full flex items-center justify-center">
                <img
                  src={auc}
                  alt="Auction"
                  className="w-[50px] h-[50px] mb-2"
                />
              </div>
              <span className="text-[#2b2b2b] text-xl font-medium font-roboto capitalize tracking-wide">Auction</span>
              {selectedMethod === "Auction" && showtick && (
                <span><img src={tick} alt="" className="w-6 h-6 absolute right-2 top-2" /></span>
              )}
            </div>
          </div>

          {/* Price Section */}
          <div className="mb-6">
            <label className="block my-[15px]">Price</label>
            <div className="flex flex-col md:flex-row rounded-lg overflow-hidden gap-4">
              <div className="flex items-center justify-center gap-3 w-full md:w-[126px] min-h-[58px] bg-white rounded-[15px] border-2 border-[#e7e7e7]">
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <img src={frylogo} alt="Fry Logo" className="w-4 h-4" />
                </span>
                <span className="text-[#2b2b2b] text-lg font-normal font-roboto tracking-wide">FRY</span>
              </div>
              <input
                type="text"
                placeholder="Enter price for one item"
                className="w-full max-w-[671px] min-h-[58px] bg-white rounded-[15px] border-2 border-[#e7e7e7] text-[#808080] text-lg font-normal font-roboto tracking-wide py-[18px] px-[30px]"
              />
            </div>
          </div>
          {/*Schedule */}
          <div className="mb-6">
            <label className="block mb-2">Schedule Listing</label>
            <div className="max-w-[817px] w-full h-[58px] bg-white rounded-[15px] border-2 border-[#e7e7e7] flex  items-center px-[30px] py-[17px]">
              <img src={inp} alt="" className="w-6 h-6" />
              <input
                type="text"
                placeholder="1 month"
                className="text-[#808080] text-lg font-normal font-roboto tracking-wide w-full px-[30px] py-[15px] outline-none"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="w-full flex justify-end">
            <button className="px-8 py-4 bg-gradient-custom rounded-lg text-white text-lg font-medium font-roboto capitalize text-center w-full md:w-auto">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellMethod;
