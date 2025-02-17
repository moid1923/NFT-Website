import React from 'react'
import ch from '../assets/CH.png'
function CollectionHero() {
  return (
    <div>
      <div className="container max-w-[1320px] w-full justify-center items-center flex gap-6 mx-auto h-[60vh]">
        <div className="container-data h-[100vh w-1/2">
            <h1 className='text-[#fe0101] text-[220px] font-apex'>NFT</h1>
            <p className='text-[64px] font-apex'>Collection</p>
        </div>
        <div className="images w-1/2">
            <img src={ch} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CollectionHero
