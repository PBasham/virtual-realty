/*========================================
        Import Components
========================================*/
import SpotlightArea from "../../components/Home/SpotlightArea.jsx"
import MiniAbout from "../../components/Home/MiniAbout.jsx"
import ServiceCards from "../../components/Home/ServiceCards.jsx"
import MiniExplore from "../../components/Home/MiniExplore.jsx"

export default function HomePage() {
  return (
    <div className="homepage">
        <SpotlightArea />
        <MiniAbout />
        <ServiceCards />
        <MiniExplore />
    </div>
  )
}
