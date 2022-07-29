/*========================================
        Import dependencies
========================================*/
import WatchListItem from "./WatchListItem.jsx"

export default function WatchList({ watchlist }) {
    return (
        <div className="watchlist-list">
            {watchlist.WatchListName}
            <div className="watchlist-items-div">
                {watchlist.listings.length != 0 ?
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
