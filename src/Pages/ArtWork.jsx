import React from 'react'
import Navbar from '../Component/Navbar'
import WilliamHero from '../AinftComponent/WilliamHero'
import PixacioHero from '../Component/PixacioHero'
import art from '../assets/artpng.jfif'
function ArtWork() {
  return (
    <div>
      <Navbar/>
      <WilliamHero/>
      <PixacioHero image={art} title='WONDERFUL ARTWORK'/>
    </div>
  )
}

export default ArtWork
