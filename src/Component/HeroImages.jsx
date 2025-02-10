import React from 'react'
import bg from '../assets/nft-back.png'
import hero from '../assets/hero-card.png'
import herofr from '../assets/herofr.png'
import herofl from '../assets/herofl.png'
import herosr from '../assets/herosr.png'
import herosl from '../assets/herosl.png'
import './heroimages.css'
function HeroImages() {
  // const arr = [
  //       {
  //         id:1,
  //         img:hero
  //       }
  // ]
  return (
    <div style={{ backgroundImage: `url(${bg})` }}
    className="bg-contain bg-center bg-no-repeat md:h-[630px] h-[450px]  max-w-[1920px] w-full bg-gradient-to-b from-white to-pink-50 relative">
        <div className='max-w-[1120px] w-full mx-auto h-auto '>
          <div className="card relative  -mt-10 sm:mt-0">
               {/* {arr.map((index,img)=>{
                <img src={img.img} alt="" className='w-[308px] h-[410px]  z-10 absolute left-[36%]' />
               })} */}

               <img src={hero} alt="" className='md:w-[308px] h-[410px]  z-40 absolute md:left-[36%] main-card sm:max-w-sm sm:left-[200px]  ' />
               <img src={herofl} alt="" className='w-[248px] h-[380px]  absolute top-[30px] left-[260px] z-20 f-left hidden lg:block' />
               <img src={herofr} alt="" className='w-[248px] h-[380px]   absolute top-[30px] right-[260px] z-20 f-right hidden lg:block' />
               <img src={herosl} alt="" className='w-[208px] h-[350px]   absolute top-[50px] left-[130px] z-10 s-left hidden lg:block' />
               <img src={herosr} alt="" className='w-[208px] h-[350px]   absolute top-[50px] right-[130px] z-10 s-left hidden lg:block' />
          </div>
        </div>
        <div className="card"></div>
      
    </div>
  )
}

export default HeroImages