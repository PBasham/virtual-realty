/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import * as ListingsApi from "../../utilities/listings-api.js"
import * as watchlistAPI from "../../utilities/watchlist-api.js"
/*========================================
        Import Compoennts
========================================*/
import ListingShow from "../../components/Explore/ListingShow.jsx"
import CreateWatchListForm from "../../components/WatchList/CreateWatchListForm/CreateWatchListForm.jsx"
/*========================================
        Import Styling
========================================*/
import "./ListingShowPage.css"
export default function ListingShowPage() {

    const navigate = useNavigate()
    
    const params = useParams()

    const [listing, setListing] = useState({})

    const [showCreateListForm, setShowCreateListForm] = useState(false)

    const [userWatchlistAll, setUserWatchlistAll] = useState([])
    
    const [selectedList, setSelectedList] = useState({
        listId: "",
    })

    let objListing = {}

    useEffect(() => {
        (async function getUserWatchList() {
            const userWatchlist = await watchlistAPI.getUserWatchList()
            await setUserWatchlistAll(userWatchlist)
            userWatchlist.length ? await setSelectedList({ listId: userWatchlist[0]._id}) : await setSelectedList(null)
        })()
    }, [])

    useEffect(function () {
        (async function getListingById() {
            const displayListing = await ListingsApi.getById(params.id)
            console.log("Listing: ", displayListing);
            (await function setupListing() {
                objListing._id = displayListing._id
                objListing.primary_photo = displayListing.primary_photo.href
                objListing.line = displayListing.location.address.line
                objListing.long_address = `${displayListing.location.address.city} ${displayListing.location.address.state}, ${displayListing.location.address.postal_code}`
                objListing.street_view_url = displayListing.location.street_view_url
                objListing.price = displayListing.list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                objListing.photos = displayListing.photos
                objListing.tags = displayListing.tags
                objListing.status = "For Sale"
                objListing.listing_date = displayListing.list_date
                objListing.monthly = (displayListing.list_price / 72).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                objListing.baths = displayListing.description.baths
                objListing.beds = displayListing.description.beds
                objListing.sqft = displayListing.description.sqft != null ? displayListing.description.sqft : displayListing.description.lot_sqft
                objListing.year_build = displayListing.description.year_built
                objListing.city = displayListing.location.address.city
                objListing.state = displayListing.location.address.state
                objListing.county = displayListing.location.county.name
                objListing.open_house = displayListing.open_houses
            })()


            setListing(objListing)
        })()
    }, [])


    /*========================================
            Functions
    ========================================*/
    const updateShowForm = () => {
        setShowCreateListForm(!showCreateListForm)
    }

    const handleAddToWatchlist = async () => {
        const listingToAdd = await watchlistAPI.addToList(selectedList.listId, {
            listingId: listing._id,
            photo: listing.primary_photo,
            price: listing.price,
            line: listing.line,
            location: `${listing.city} ${listing.state}`,
        })
    }

    const handleCreateWatchlist = async () => {
        updateShowForm()
    }

    const addList = (newList) => {
        console.log(newList);
        setSelectedList({ listId: newList._id})
        setUserWatchlistAll([...userWatchlistAll, newList])
    }

    const handleOptionChange = (e) => {
        console.log("Change!", e.target.value)
        setSelectedList({listId: e.target.value})
    }
    /* end functions */
    return (
        <>
            {showCreateListForm ? <CreateWatchListForm updateShowForm={updateShowForm} addList={addList} /> : null}
            <div className="listing-show">
                <div className="back-btn" onClick={() => navigate(-1)}>
                    {`<`}
                </div>
                <div className="listing-show-header">
                    <h2>{listing.line}</h2>
                    <a href={`${listing.street_view_url}`} target="_blank">{listing.long_address}</a>
                </div>
                <div className="listing-wrapper">

                    <div className="listing-img">
                        <img src={listing.primary_photo} alt="" />
                        <div className="listing-main-info">
                            <p>${listing.price}</p>
                            <p>{listing.line}</p>
                            <p>{`${listing.city} ${listing.state}`}</p>
                        </div>
                    </div>
                    <div className="listing-details">
                        <ul className="listing-details-list">
                            <li>Status <span>{listing.status}</span> </li>
                            <li>Monthly <span>${listing.monthly} 3yrs</span> </li>
                            <li>Baths <span>{listing.baths}</span> </li>
                            <li>Beds <span>{listing.beds}</span> </li>
                            <li>sqft <span>{listing.sqft}</span> </li>
                            <li>Year build <span>{listing.year_build}</span> </li>
                            <li>County <span>{listing.county}</span> </li>
                        </ul>
                        <div className="buttons-div">
                            {userWatchlistAll.length ?
                                <>
                                    <button className="watchlist-add-btn btn" onClick={handleAddToWatchlist}>Add To Watchlist</button>
                                    <select name="userListings" onChange={handleOptionChange}>
                                        {userWatchlistAll.map((list, index) => (
                                            < option value={list._id}>{list.WatchListName}</option>
                                        ))}
                                    </select>
                                </>
                                :
                                <button className="watchlist-add-btn btn" onClick={handleCreateWatchlist}>Create Watchlist</button>
                            }
                        </div>
                    </div>
                </div>
                <ul className="listing-tags">
                    {listing.tags != null ?
                        listing.tags.map(tag => (
                            <li className="listing-tag">{tag}</li>
                        ))
                        :
                        null

                    }
                </ul>
            </div>
        </>
    )
}
