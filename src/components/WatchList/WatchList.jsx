/*========================================
        Import dependencies
========================================*/
import WatchListItem from "./WatchListItem.jsx"

export default function WatchList() {
    return (
        <div className="watchlist-list">
            WatchList
            <div className="watchlist-items-div">
                I contain the watchlist items
                <WatchListItem />
                <WatchListItem />
                <WatchListItem />
            </div>
        </div>
    )
}
