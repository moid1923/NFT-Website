import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import NftHero from '../AinftComponent/NftHero'
import PromptE from '../AinftComponent/PromptE'
import NFTGallery from '../AinftComponent/NFTGallery'
function MasterPiece() {
  return (
    <div>
      <Navbar/>
      <NftHero/>
      <PromptE/>
      <NFTGallery/>
      <Footer/>
    </div>
  )
}

export default MasterPiece
