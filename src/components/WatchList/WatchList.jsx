/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
/*========================================
        Import dependencies
========================================*/
import WatchListItem from "./WatchListItem.jsx"

export default function WatchList({ watchlist }) {
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
        </div>
    )
}
