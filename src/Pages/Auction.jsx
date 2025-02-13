import React from 'react'
import Navbar from '../Component/Navbar'
import Actionhero from '../Component/Actionhero'
import Oction from '../Component/Oction'
import Footer from '../Component/Footer'


function Auction() {
  return (
    <div>
      <Navbar/>
      <Actionhero/>
      <Oction maxImages={12} title='Top Listed'/>
      <Oction maxImages={12} title='Mueed'/>
      <Footer/>
    </div>
  )
}

export default Auction
