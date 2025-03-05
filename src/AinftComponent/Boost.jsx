import React from 'react';
import boost from '../assets/bootpage.png';
//applying its navigation to choose collection component for testing
function Boost() {
  return (
    <div className="max-w-[500px] mx-auto bg-white rounded-lg shadow-lg p-6 relative text-center ">
      <div className=" w-[150px] h-[140px] border-4 border-red-500 rounded-xl overflow-hidden mx-auto">
        <img src={boost} alt="Boost" className="w-full h-full object-cover" />
      </div>

      <h2 className="mt-12 text-xl font-bold">PIXACIO</h2>

      <div className="flex justify-between mt-4 text-lg">
        <span>Price</span>
        <span className="font-semibold">7.01 FRY</span>
      </div>

      <div className="flex justify-between mt-2 text-lg">
        <span>Duration</span>
        <span className="font-semibold">24 Hours</span>
      </div>

      <div className="mt-4 text-left">
        <strong>Details:</strong>
        <ul className="list-disc list-inside text-gray-500 text-sm mt-2">
          <li>Get your NFT highlighted in the featured section for one day.</li>
          <li>Perfect for a quick visibility boost to attract immediate attention.</li>
        </ul>
      </div>

      <div className="mt-4 text-left text-sm">
        <strong>Performance Indicator:</strong>
        <span className="text-red-500"> "Expected Increase: +300% visibility"</span>
      </div>

      <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white mt-6 py-3 rounded-lg hover:opacity-90">
        Boost Now
      </button>
    </div>
  );
}

export default Boost;
