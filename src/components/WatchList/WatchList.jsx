/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
import * as watchlistAPI from "../../utilities/watchlist-api.js"
/*========================================
        Import dependencies
========================================*/
import WatchListItem from "./WatchListItem.jsx"

export default function WatchList({ watchlist }) {

    const handleDeleteClick = async () => {
        watchlistAPI.deleteList(watchlist._id)
    }
    return (
        <div className="watchlist-list">
            <h2>{watchlist.WatchListName}</h2>
            <div className="watchlist-items-div">
                {watchlist.listings.length ?
                    watchlist.listings.map((listing, index) => (
                        <WatchListItem 
                            key={index}
                            listing={listing}
                        />
                    ))
                    :
                    null
                }
            </div>
            <div className="delete-list-div">
                <button className="delete-list-btn btn" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}
