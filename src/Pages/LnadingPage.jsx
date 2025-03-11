import React from 'react'
import DigitalAsset from '../Component/DigitalAsset'
import FAQSection from '../Component/FAQSection'
import FeaturedCollection from '../Component/FeaturedCollection'
import Footer from '../Component/Footer'
import HeroImages from '../Component/HeroImages'
import HeroSection from '../Component/HeroSection'
import Navbar from '../Component/Navbar'
import RecentlySold from '../Component/RecentlySold'
import TopCollection from '../Component/TopCollection'
import TopSellers from '../Component/TopSellers'
import TrendingNFTs from '../Component/TrendingNFTs'
import Visibility from '../Component/Visibility'
import featbg from '../assets/featbg.png'
import bgauc from '../assets/bgauc.png'
import bgtsell from '../assets/bgtsell.png'

import shadow from '../assets/Ellipse.png'
import LandingAuc from '../Component/LandingAuc'
import randbg from '../assets/randbg.png'

function LnadingPage() {
  return (
    <div className='bg-gradient-to-b from-[#fff0f0] to-white max-w-[100%] overflow-x-hidden overflow-y-hidden relative'>
          <img src={featbg} alt="" className='hidden xl:block absolute top-[1497px] -right-[5%] max-w-[883px] max-h-[715px] opacity-70' />
              <img src={bgauc} alt="" className='hidden xl:block absolute top-[3700px] -right-[5%] max-w-[839px] max-h-[820px] opacity-70 z-0' />
        
              <img src={bgtsell} alt="" className='hidden xl:blockb absolute top-[3220px] -left-[71px] max-w-[883px] max-h-[715px] opacity-70 z-0' />
              <img src={bgtsell} alt="" className='hidden xl:block absolute top-[5000px] -right-[271px] max-w-[883px] max-h-[715px] opacity-70 z-0' />
              <img src={bgtsell} alt="" className='hidden xl:block absolute top-[7100px] -right-[71px] max-w-[883px] max-h-[715px] opacity-70 z-0' />
              <img src={bgauc} alt="" className='hidden xl:block absolute top-[9200px] -right-[0%] max-w-[839px] max-h-[420px] opacity-70 z-0' />
              <img src={shadow} alt="" className='block absolute top-[6900px] left-1/2  transform -translate-x-1/2 max-w-[839px] max-h-[420px] opacity-70 z-0  ' />
              <img src={randbg} alt="" className='block absolute top-[6820px] left-1/2  transform -translate-x-1/2 max-w-[1100px] max-h-[607px] opacity-70 z-0  ' />
              <img src={shadow} alt="" className='hidden xl:block absolute top-[8000px] -left-[200px] max-w-[839px] max-h-[420px] opacity-70 z-0  ' />
              <img src={shadow} alt="" className='hidden xl:block absolute top-[9000px] -right-[200px] max-w-[1009px] max-h-[420px] opacity-70 z-0  ' />
    <Navbar/> 
    <HeroSection/>
    <HeroImages/>
    <FeaturedCollection/>
    <TrendingNFTs/>
    <TopSellers/>
    <LandingAuc/>
    <TopCollection/>
    <RecentlySold/>
    <DigitalAsset/>
    <Visibility/>
    <FAQSection/>
    <Footer/>
  
    </div>
  )
}

export default LnadingPage
