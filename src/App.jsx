
import './App.css'
import DigitalAsset from './Component/DigitalAsset'
import FAQSection from './Component/FAQSection'
import FeaturedCollection from './Component/FeaturedCollection'
import Footer from './Component/Footer'
import HeroImages from './Component/HeroImages'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import Oction from './Component/Oction'
import RecentlySold from './Component/RecentlySold'
import TopCollection from './Component/TopCollection'
import TopSellers from './Component/TopSellers'
import TrendingNFTs from './Component/TrendingNFTs'
import Visibility from './Component/Visibility'

function App() {

  return (
    <div className='bg-gradient-to-b from-white to-[#fff0f0] max-w-[100%] overflow-x-hidden'>
    <Navbar/>
    <HeroSection/>
    <HeroImages/>
    <FeaturedCollection/>
    <TrendingNFTs/>
    <TopSellers/>
    <Oction/>
    <TopCollection/>
    <RecentlySold/>
    <DigitalAsset/>
    <Visibility/>
    <FAQSection/>
    <Footer/>
    </div>
    
  )
}

export default App
