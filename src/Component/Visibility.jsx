import React from "react";
import topv from "../assets/topv.png";
import botv from "../assets/botv.png";
import sidev from "../assets/sidev.png";
import vlogo from "../assets/vlogo.jfif";

function Visibility() {
  return (
    <div className="bg-gradient-to-br from-white to-red-50 py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            BOOST YOUR NFTs: ENHANCE VISIBILITY AND VALUE
          </h1>
          <p className="mt-4 text-gray-700 text-lg sm:text-xl">
            The Boost feature is a premium service that allows NFT creators and
            collectors to elevate their listings on our marketplace. By boosting
            an NFT, you can ensure it appears prominently in search results,
            featured sections, and on the homepage, maximizing exposure to
            potential buyers.
          </p>
          <button className="mt-6 bg-red-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 focus:ring focus:ring-red-300">
            Boost <span className="ml-2">🚀</span>
          </button>
        </div>

        {/* Image Section */}
        
      </div>
    </div>
  );
}

export default Visibility;
