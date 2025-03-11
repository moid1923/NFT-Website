import React from 'react';
import boost from '../assets/bootpage.png';
//applying its navigation to choose collection component for testing
function Boost() {
  return (
    <div className="max-w-[580px] mx-auto h-[685px] bg-white rounded-lg shadow-lg p-4 relative text-center ">
      <div className=" w-[150px] h-[140px]  rounded-xl overflow-hidden mx-auto">
        <img src={boost} alt="Boost" className="w-full h-full object-cover" />
      </div>

      <h2 className="text-center justify-start text-[#2b2b2b] text-2xl font-normal font-apex mt-12">PIXACIO</h2>
        <hr  className='bg-gradient-custom text-red-400 my-[25px]'/>
      <div className="flex justify-between my-5 text-lg">
        <span className='justify-start text-[#2b2b2b] text-lg font-normal font-roboto'>Price</span>
        <span className="text-right justify-start text-[#2b2b2b] text-lg font-medium font-roboto">7.01 FRY</span>
      </div>

      <div className="flex justify-between my-5 text-lg">
        <span className='justify-start text-[#2b2b2b] text-lg font-normal font-roboto'>Duration</span>
        <span className="text-center justify-start text-[#808080] text-sm font-normal font-roboto">24 Hours</span>
      </div>

      <div className="my-5 text-left">
        <strong className='justify-start text-[#2b2b2b] text-lg font-medium font-roboto'>Details:</strong>
        <ul className="list-disc list-inside text-gray-500 text-sm mt-2">
          <li className='text-[#808080] text-lg font-normal font-roboto'>Get your NFT highlighted in the featured section for one day.</li>
          <li className='text-[#808080] text-lg font-normal font-roboto'>Perfect for a quick visibility boost to attract immediate attention.</li>
        </ul>
      </div>

      <div className="my-5  text-sm flex justify-between">
        <strong className='justify-start text-[#2b2b2b] text-lg font-normal font-roboto'>Performance Indicator:</strong>
        <span className="text-right justify-start text-[#fe0101] text-lg font-medium font-roboto"> "Expected Increase: +300% visibility"</span>
      </div>
      <div className='w-[284px] my-[25px] px-8 py-4 bg-gradient-to-tl from-[#fd0000] to-[#ff9191] rounded-lg inline-flex justify-center items-center gap-2.5'>
      <button className="text-center justify-start text-white text-lg font-medium font-roboto capitalize">
        Boost Now
      </button>
      </div>
      
    </div>
  );
}

export default Boost;
