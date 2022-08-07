/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import * as watchlistAPI from "../../utilities/watchlist-api.js"
/*========================================
        Import dependencies
========================================*/
import WatchListItem from "./WatchListItem.jsx"

export default function WatchList({ watchlist, updateList }) {

    const handleDeleteClick = async () => {
        await watchlistAPI.deleteList(watchlist._id)
        updateList()
    }

    const [collapse, setCollapse] = useState(true)

    return (
        <div className={`watchlist-list ${collapse ? "collapsed" : null}`}>
            <div className="watchlist-list-title">
                <h2>{watchlist.WatchListName}</h2>
                <button className="watchlist-btn" onClick={() => {setCollapse(!collapse)}}>
                    {collapse ? "See All" : "Collapse"}
                </button>
            </div>
            <div className="watchlist-items-div">
                {watchlist.listings.length ?
                    watchlist.listings.map((listing, index) => (
                        <WatchListItem
                            key={index}
                            listing={listing}
                            updateList={updateList}
                            watchlistId={watchlist._id}
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
