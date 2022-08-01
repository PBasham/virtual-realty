/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import * as listingsApi from "../../utilities/listings-api.js"
import * as watchlistAPI from "../../utilities/watchlist-api.js"
/*========================================
        Import Compoennts
========================================*/
import CreateWatchListForm from "../../components/WatchList/CreateWatchListForm/CreateWatchListForm.jsx"
import ListingShowDetails from "../../components/Explore/ListingShowDetails.jsx"
import ListingShowPhotos from "../../components/Explore/ListingShowPhotos.jsx"
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

    const [ addToListMessage, setAddToListMessage] = useState("")

    let objListing = {}

    useEffect(() => {
        (async function getUserWatchList() {
            const userWatchlist = await watchlistAPI.getUserWatchList()
            await setUserWatchlistAll(userWatchlist)
            userWatchlist.length ? await setSelectedList({ listId: userWatchlist[0]._id }) : await setSelectedList(null)
        })()
    }, [])

    useEffect(function () {
        (async function getListingById() {
            const displayListing = await listingsApi.getById(params.id)
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
                objListing.monthly = (displayListing.list_price / 180).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
        listingToAdd ? 
            setAddToListMessage("Added to watchlist!")
            :
            setAddToListMessage("Already in watchlist.")

        console.log(listingToAdd)
    }

    const handleCreateWatchlist = async () => {
        updateShowForm()
    }

    const addList = (newList) => {
        console.log(newList);
        setSelectedList({ listId: newList._id })
        setUserWatchlistAll([...userWatchlistAll, newList])
    }

    const handleOptionChange = (e) => {
        console.log("Change!", e.target.value)
        setSelectedList({ listId: e.target.value })
    }
    /* end functions */





    return (
        <>
            {showCreateListForm ? <CreateWatchListForm updateShowForm={updateShowForm} addList={addList} /> : null}
            <div className="listing-show-wrapper">
                <div className="listing-show-header">
                    <div className="back-btn" onClick={() => navigate(-1)}>
                        {`<`}
                    </div>
                    <h2>{listing.line}</h2>
                    <a href={`${listing.street_view_url}`} target="_blank">{listing.long_address}</a>
                    <div className="watchlist-btn-div">
                    {userWatchlistAll.length ?
                                <>
                                    <button className="watchlist-add-btn btn" onClick={handleAddToWatchlist}>Add To Watchlist</button>
                                    <select name="userListings" onChange={handleOptionChange}>
                                        {userWatchlistAll.map((list, index) => (
                                            < option value={list._id}>{list.WatchListName}</option>
                                        ))}
                                    </select>
                                    <p>{addToListMessage}</p>
                                </>
                                :
                                <button className="watchlist-add-btn btn" onClick={handleCreateWatchlist}>Create Watchlist</button>
                            }
                        
                    </div>
                </div>
                <div className="listing-wrapper">
                        <ListingShowPhotos 
                            primary_photo={listing.primary_photo}
                            photos={listing.photos}
                        />
                        <ListingShowDetails />
                </div>
            </div>
        </>
    )
}
