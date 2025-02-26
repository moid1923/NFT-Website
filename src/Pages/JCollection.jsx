import React from 'react'
import Navbar from '../Component/Navbar'
import js from '../assets/jc.png'
import JaCollection from '../Component/JaCollection'
import Footer from '../Component/Footer'



function JCollection() {
  return (
    <div>
      <Navbar/>
      <div className="hero-section my-16">
        <div className='max-w-[1320px] w-full mx-auto'>
            <div className="heading">
                <div className='font-apex font-bold text-[30px] sm:text-[50px] md:text-[64px] lg:text-[96px] text-[#fe0101] text-center'>JACOB JONES</div>
                <div className='font-apex font-bold text-[32px] sm:text-[40px] md:text-[45px] lg:text-[64px] text-center '>COLLECTION</div>
            </div>
            <div className="img -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-23 xs:p-4 sm-p-2 md:p-0">
                <img src={js} alt="" />
            </div>
        </div>
      </div>
      <JaCollection/>
      <Footer/>
    </div>
  )
}

export default JCollection
