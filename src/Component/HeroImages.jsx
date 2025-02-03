import React from 'react'
import bg from '../assets/nft-back.png'
import hero from '../assets/hero-card.png'

function HeroImages() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}
    className="bg-cover bg-center h-[630px] max-w-[1920px] w-full bg-gradient-to-b from-white to-pink-50">
        <div className='max-w-[1120px] w-full mx-auto h-auto '>
          <div className="card relative ">
               <img src={hero} alt="" className='w-[308px] h-[410px]  z-10 absolute left-[36%]' />
               <img src={hero} alt="" className='w-[248px] h-[380px]  absolute top-[30px] left-[260px] -z-10' />
               <img src={hero} alt="" className='w-[248px] h-[380px]   absolute top-[30px] right-[260px] -z-10' />
               <img src={hero} alt="" className='w-[208px] h-[350px]   absolute top-[50px] left-[130px] -z-20' />
               <img src={hero} alt="" className='w-[208px] h-[350px]   absolute top-[50px] right-[130px] -z-20' />

          </div>
        </div>
        <div className="card"></div>
      
    </div>
  )
}

export default HeroImages