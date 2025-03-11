import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auction from "./Pages/Auction";
import LnadingPage from "./Pages/LnadingPage";
import Collection from "./Pages/Collection";
import Pixacio from "./Pages/Pixacio";
import PixNFT from "./Pages/PixNFT";
import TSeller from "./Pages/TSeller";
import JCollection from "./Pages/JCollection";
import MasterPiece from "./Pages/MasterPiece";
import CardPage from "./Pages/CardPage";
import CardTwo from "./Pages/CardTwo";
import MintNFTForm from "./Pages/MintNFTForm";
import ChooseCollection from "./Pages/ChoseCollection";
import CreateNewCollection from "./Pages/CreateNewCollection";
import William from "./Pages/William";
import ArtWork from "./Pages/ArtWork";
import ProfileSetting from "./Pages/ProfileSetting";
import FixedPrice from "./Pages/FixedPrice";
import SellAuction from "./Pages/SellAuction";
import UploadImage from "./ProfileComponent/UploadImage";
import Boost from "./AinftComponent/Boost";
import BidPlacement from "./Component/BidPlacement";
import BidModal from "./Pages/BidModal";

function App() {
  return (
    <div className="bg-[#fff9f9] max-w-[100%] overflow-x-hidden overflow-y-hidden relative">
      <Router>
        <Routes>
          <Route path="/" element={<LnadingPage />} /> {/* Default Route */}
          <Route path="/auction" element={<Auction />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/pixacio" element={<Pixacio />} />
          <Route path="/pixNFT" element={<PixNFT />} />
          <Route path="/tseller" element={<TSeller />} />
          <Route path="/jcollection" element={<JCollection />} />
          <Route path="/masterpiece" element={<MasterPiece />} />
          <Route path="/aicard" element={<CardPage />} />
          <Route path="/aicardt" element={<MintNFTForm />} />
          <Route path="/aichoose" element={<ChooseCollection />} />
          <Route path="/aicreate" element={<CreateNewCollection />} />
          <Route path="/aiwilliam" element={<William />} />
          <Route path="/aiart" element={<ArtWork />} />
          <Route path="/aiprsetting" element={<ProfileSetting />} />
          <Route path="/aipric" element={<FixedPrice />} />
          <Route path="/aiauc" element={<SellAuction />} />
          <Route path="/upload" element={<UploadImage />} />
          <Route path="/boost" element={<Boost />} />
          <Route path="/bidplacement" element={<BidModal />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
