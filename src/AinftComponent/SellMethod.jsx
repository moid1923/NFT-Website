import React from 'react';
import fixprice from '../assets/lpfix.png';
import auc from '../assets/lpauc.png';
import sideimg from '../assets/lpimg.png';
import backicon from '../assets/back.png';
import frylogo from '../assets/felogo.png';
import inp from '../assets/input.png'
function SellMethod() {
  return (
    <div className="max-w-[1320px] mx-auto p-6">
      {/* Back Button */}
      <button className="flex items-center gap-2 mb-8 ">
        <img src={backicon} alt="Back" className="w-6 h-6" />
        <span className="text-lg text-[#2b2b2b]">Back</span>
      </button>

      {/* Container */}
      <div className="flex flex-wrap gap-[30px] bg-white max-w-[1320px] w-full shadow-lg rounded-lg p-6">
        {/* Preview Section */}
        <div className="flex flex-col gap-4 items-center w-[296px] h-[309px] bg-white rounded-[20px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)]  p-5">
          <img src={sideimg} alt="Preview Your Item" className="w-full h-full rounded-lg shadow-lg" />
          <p className="mt-4 text-lg text-[#2b2b2b]">Preview Your Item</p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col max-w-[994px] w-full">
          <h2 className="text-center text-2xl font-bold mb-6">ROYAL SAMURAI</h2>
          <p className="text-lg mb-4">Select Your Sell Method</p>

          <div className="flex gap-4 mb-6">
            <div className="flex flex-col items-center gap-3 justify-center p-4 rounded-lg border cursor-pointer max-w-[208px] w-full h-[217px]">
                <div className=' bg-[#45adeb] w-[99px] h-[99px] rounded-full flex items-center justify-center'>
                <img src={fixprice} alt="Fixed Price" className="w-[50px] h-[50px] mb-2" />
                </div>
             
              <span>Fixed Price</span>
            </div>
            <div className="flex flex-col items-center gap-3 justify-center p-4 rounded-lg border cursor-pointer max-w-[208px] w-full h-[217px]">
                <div className='bg-[#f7a940] w-[99px] h-[99px] rounded-full flex items-center justify-center'>
                <img src={auc} alt="Fixed Price" className="w-[50px] h-[50px] mb-2" />
                </div>
             
              <span>Auction</span>
            </div>
          </div>

          {/* Price Section */}
          <div className="mb-6">
            <label className="block mb-2">Price</label>
            <div className="flex  rounded-lg overflow-hidden gap-4">
              <div className="flex items-center justify-center gap-3 w-[126px] h-[58px] bg-white rounded-[15px] border-2 border-[#e7e7e7]">
                <span className='w-6 h-6 rounded-full bg-black flex items-center justify-center'><img src={frylogo} alt="Fry Logo" className="w-4 h-4 mr-2" /></span> <span className='text-[#2b2b2b] text-lg font-normal font-roboto tracking-wide'>FRY</span> 
              </div>
              <input type="text" placeholder="Enter price for one item" className="w-[671px] h-[58px] bg-white rounded-[15px] border-2 border-[#e7e7e7] text-[#808080] text-lg font-normal font-roboto tracking-wide py-[18px] px-[30px]
              " />
            </div>
          </div>

          {/* Schedule Listing */}
          <div className="mb-6">
            <label className="block mb-2">Schedule Listing</label>
            <div className='w-[817px] h-[58px] bg-white rounded-[15px] border-2 border-[#e7e7e7] flex gap-4  items-center px-[30px] py-[17px]'><img src={inp} alt="" className='w-6 h-6' />
            <input type="text" placeholder='1 month' className='text-[#808080] text-lg font-normal font-roboto tracking-wide ' /></div>
            
          </div>

          {/* Submit Button */}
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg w-full">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SellMethod;
