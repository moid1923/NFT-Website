import React from 'react'
import Navbar from '../Component/Navbar'
import WilliamHero from '../AinftComponent/WilliamHero'
import PixacioHero from '../Component/PixacioHero'
import art from '../assets/artpng.jfif'
import { TrendingDownIcon } from 'lucide-react'
import nft1 from "../assets/nft1.jfif";
import nft2 from "../assets/nft2.jfif";
import nft3 from "../assets/nft3.jfif";
import nft4 from "../assets/nft4.jfif";
import nft5 from "../assets/nft5.jfif";
import nft6 from "../assets/nft6.png";
import nft7 from "../assets/nft7.jfif";
import nft8 from "../assets/nft8.png";
import hero from "../assets/fc-logo.jfif";
import bg from "../assets/bgfeature.png";
import tran from "../assets/drp.png";
import flogo from '../assets/felogo.png'
import TrendingNFTs from '../Component/TrendingNFTs'

const nfts = [
  { id: 1, img: nft1, logo: flogo },
  { id: 2, img: nft2, logo: flogo },
  { id: 3, img: nft3, logo: flogo },
  { id: 4, img: nft4, logo: flogo },
  { id: 5, img: nft5, logo: flogo },
  { id: 6, img: nft6, logo: flogo },
  { id: 7, img: nft7, logo: flogo },
  { id: 8, img: nft8, logo: flogo },
];
function ArtWork() {
  const newOptions = ["Newest", "Oldest"]; 
  return (
    <div>
      <Navbar/>
      <WilliamHero/>
      <PixacioHero image={art} title='WONDERFUL ARTWORK'/>
      <TrendingNFTs cards={nfts} dropdownOptions={newOptions} showDropdown = {true} title='Abdul Mueed' showtitle = {false} shownavigate = {true}/>
    </div> 
  )
}

export default ArtWork
