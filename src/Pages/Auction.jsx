import React from "react";
import Navbar from "../Component/Navbar";
import Actionhero from "../Component/Actionhero";
import Oction from "../Component/Oction";
import Footer from "../Component/Footer";
import TopListed from "../Component/TopListed";



function Auction() {
 
  return (
    <div>
      <Navbar />
      <Actionhero />
      <TopListed/>
     
      
      <Oction maxImages={12} title="Live Auction" showButtons={true} />
      <Footer />
    </div>
  );
}

export default Auction;
