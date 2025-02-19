import React from "react";
import Navbar from "../Component/Navbar";
import Actionhero from "../Component/Actionhero";
import Oction from "../Component/Oction";
import Footer from "../Component/Footer";
import TopList from "../Component/TopList";



function Auction() {
 
  return (
    <div>
      <Navbar />
      <Actionhero />
      <TopList title="Top Listed" start={0} maxImages={12} showButtons={true}/>
      <Oction maxImages={12} title="Live Auction" showButtons={true} />
      <Footer />
      
    </div>
  );
}

export default Auction;
