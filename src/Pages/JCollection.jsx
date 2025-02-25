import React from 'react'
import Navbar from '../Component/Navbar'
import js from '../assets/jc.png'
function JCollection() {
  return (
    <div>
      <Navbar/>
      <div className="hero-section">
        <div className='max-w-[1320px] w-full mx-auto'>
            <div className="heading">
                <div className='font-apex font-bold text-[96px] text-[#fe0101] text-center'>JACOB JONES</div>
                <div className='font-apex font-bold text-[64px] text-center '>COLLECTION</div>
            </div>
            <div className="img -mt-23">
                <img src={js} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default JCollection
