
import './App.css'
import FeaturedCollection from './Component/FeaturedCollection'
import HeroImages from './Component/HeroImages'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import Oction from './Component/Oction'
import RecentlySold from './Component/RecentlySold'
import TopCollection from './Component/TopCollection'
import TopSellers from './Component/TopSellers'
import TrendingNFTs from './Component/TrendingNFTs'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <HeroImages/>
    <FeaturedCollection/>
    <TrendingNFTs/>
    <TopSellers/>
    <Oction/>
    <TopCollection/>
    <RecentlySold/>
    </>
    
  )
}

export default App
