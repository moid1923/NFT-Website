import React from 'react'
import Navbar from '../Component/Navbar'
import SellMethod from '../AinftComponent/SellMethod'

function SellAuction() {
  return (
    <div>
      <Navbar/>
      <SellMethod showtick = {true} selectedMethod='Auction'/>
    </div>
  )
}

export default SellAuction
