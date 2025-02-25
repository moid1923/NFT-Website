import React from "react";
import PixacioNFT from "../Component/PixacioNFT";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import TrendingNFTs from '../Component/TrendingNFTs'
function PixNFT() {
  return (
    <div>
      <Navbar />
      <PixacioNFT />
     <TrendingNFTs/>
      <Footer />
    </div>
  );
}

export default PixNFT;
