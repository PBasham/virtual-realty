/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import * as listingsAPI from "../../utilities/listings-api.js"
/*========================================
        Import Components
========================================*/
import SpotlightArea from "../../components/Home/SpotlightArea.jsx"
import MiniAbout from "../../components/Home/MiniAbout.jsx"
import ServiceCards from "../../components/Home/ServiceCards.jsx"
import MiniExplore from "../../components/Home/MiniExplore.jsx"
/*========================================
        Import Styling
========================================*/
import "./HomePage.css"

export default function HomePage({navBarLinks, setNavBarLinks}) {

    const [spotlightHouses, setSpotlightHouses] = useState({
        showHouse: {},
        listHouses: [],
    })
    
    useEffect(() => {
        (async function getSpotlightHouses() {
            const listings = await listingsAPI.spotlightHouses()
            console.log("listings: ", listings)
            await setSpotlightHouses({
                ...spotlightHouses,
                showHouse: listings.showHouse,
                listHouses: listings.listHouses
            })
        })()
        setNavBarLinks({...navBarLinks, activeNavLink: 0})
    }, [])

    return (
        <div className="homepage">
            <SpotlightArea 
            showHouse={spotlightHouses.showHouse}
            listHouses={spotlightHouses.listHouses}
            />
            <MiniAbout />
            <ServiceCards />
            <MiniExplore />
        </div>
    )
}
