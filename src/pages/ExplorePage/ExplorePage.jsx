/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import * as ListingsApi from "../../utilities/listings-api.js"
import * as FiltersApi from "../../utilities/filters-api.js"
/*========================================
        Import Components
========================================*/
import Listings from "../../components/Explore/Listings.jsx"
import ExploreFilters from "../../components/Explore/ExploreFilters.jsx"
/*========================================
        Import Styling
========================================*/
import "./ExplorePage.css"

export default function ExplorePage({ navBarLinks, setNavBarLinks }) {
    const [listingsList, setListingsList] = useState([])
    const [filters, setFilters] = useState({
        counties: [],
        cities: [],
        tags: [],
    })

    useEffect(function () {
        (async function getListings() {
            const displayListings = await ListingsApi.getAll()
            setListingsList(displayListings)
            const filters = await FiltersApi.getAll()
            // console.log(filters);
            setFilters(...filters, {
                counties: filters.counties,
                cities: filters.cities,
                tags: filters.tags,
            })
        })()
        setNavBarLinks({ ...navBarLinks, activeNavLink: 1 })
    }, [])


    const getFilteredListings = async (filterData) => {
        const displayListings = await ListingsApi.getFiltered(filterData)
        setListingsList(displayListings)
    }

    return (
        <div className="explore-page">
            <h1>Take a scroll through our beautiful homes</h1>
            <div className="explore-page-content">
                <ExploreFilters filters={filters} getFilteredListings={getFilteredListings}/>
                <Listings listingsList={listingsList} />
            </div>
        </div>
    )
}
