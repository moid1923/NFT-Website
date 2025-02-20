import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import PixacioHero from "../Component/PixacioHero";
import TopList from "../Component/TopList";

function Pixacio() {
  const navigate = useNavigate();

  // Function to handle card click
  const handleCardClick = (id) => {
    navigate(`/pixaciNFT`); // Navigating to details page with dynamic ID
  };

  return (
    <div>
      <Navbar />
      <PixacioHero />
      <TopList title="" start={12} maxImages={14} onCardClick={handleCardClick} />
      <Footer />
    </div>
  );
}

export default Pixacio;
