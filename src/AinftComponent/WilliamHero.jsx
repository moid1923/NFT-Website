import React from 'react'
import william from '../assets/william.png'
import willaimh from '../assets/williamh.jfif'
function WilliamHero() {
  return (
    <div>
      <section className='william-hero max-w-[1320px] w-full mx-auto'>
         <div className="top-btn max-w-[236px] w-full flex gap-4 items-center justify-center p-2 rounded-[10px] border-2 border-[#e7e7e7] my-[55px]">
          <button className='w-[70px] h-[34px] bg-gradient-custom text-center text-white text-sm font-medium font-roboto capitalize px-[10px] py-[5px] rounded-[8px]'>Profile</button>
          <button className='w-[125px] h-[34px] text-center text-[#2b2b2b] text-sm font-normal font-roboto capitalize px-[10px] py-[5px]'>Profile Setting</button>
         </div>
         <div className="hero-image relative bg-cover max-w-[1320px] w-full h-[305px] shrink z-20"
         style={{ backgroundImage: `url(${william})` }}
         >
          <div
    className="hero-image bg-cover max-w-[1320px] w-full h-[305px]  z-20 relative"
    style={{ backgroundImage: `url(${william})` }}
  >
    <button className="absolute top-3 right-3 w-[103px] h-[53px] bg-gradient-custom text-center text-white text-lg font-semibold font-roboto capitalize px-[10px] py-[5px] rounded-[8px]">
      Follow
    </button>
  </div>

  <div className="absolute top-[96%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100px] h-[100px] rounded-full z-50">
    <img
      src={willaimh}
      alt=""
      className="w-full h-full object-cover rounded-full"
    />
  </div>

         </div>
         
      </section>
    </div>
  )
}

export default WilliamHero
