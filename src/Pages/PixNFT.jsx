import React from "react";
import PixacioNFT from "../Component/PixacioNFT";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import TrendingNFTs from '../Component/TrendingNFTs'
import pixnft1 from '../assets/pixnft1.jfif'
import pixnft2 from '../assets/pixnft2.jfif'
import pixnft3 from '../assets/pixnft3.jfif'
import pixnft4 from '../assets/pixnft4.jfif'
import pixnft5 from '../assets/pixnft5.jfif'
import pixnft6 from '../assets/pixnft6.jfif'
import pixnft7 from '../assets/pixnft7.jfif'
import pixnft8 from '../assets/pixnft8.jfif'
import flogo from '../assets/felogo.png'
const collections = [
  { id: 1, img: pixnft1, logo: flogo },
  { id: 2, img: pixnft2, logo: flogo },
  { id: 3, img: pixnft3, logo: flogo },
  { id: 4, img: pixnft4, logo: flogo },
  { id: 5, img: pixnft5, logo: flogo },
  { id: 6, img: pixnft6, logo: flogo },
  { id: 7, img: pixnft7, logo: flogo },
  { id: 8, img: pixnft8, logo: flogo },
];


function PixNFT() {
  return (
    <div>
      <Navbar />
      <PixacioNFT />
     <TrendingNFTs title="More from this collection" showDropdown={false} cards={collections}/>
      <Footer />
    </div>
  );
}

export default PixNFT;
