/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react";
import * as watchlistApi from "../../utilities/watchlist-api.js"
/*========================================
        Import Components
========================================*/
import WatchList from "../../components/WatchList/WatchList.jsx";
import CreateWatchListForm from "../../components/WatchList/CreateWatchListForm/CreateWatchListForm.jsx";
/*========================================
        Import Styling
========================================*/
import "./WatchListPage.css"
import "../../components/WatchList/CreateWatchListForm/CreateWatchListForm.css"

export default function WatchListPage() {

    const [userWatchlistAll, setUserWatchlistAll] = useState([])

    const [showCreateListForm, setShowCreateListForm] = useState(false)

    /*========================================
            Get the data?
    ========================================*/
    useEffect(() => {
        (async function getUserWatchList() {
            const userWatchlist = await watchlistApi.getUserWatchList()
            setUserWatchlistAll(userWatchlist)
        })()
    }, [])

    /*========================================
            Functions
    ========================================*/
    const updateShowForm = () => {
        setShowCreateListForm(!showCreateListForm)
    }

    const addList = (newList) => {
        setUserWatchlistAll([...userWatchlistAll, newList])
    }

    const updateList = async () => {
        const userWatchlist = await watchlistApi.getUserWatchList()
        setUserWatchlistAll(userWatchlist)
    }

    return (
        <>
            {showCreateListForm ? <CreateWatchListForm updateShowForm={updateShowForm}
                addList={addList} /> : null}
            <div className="watchlist-page">
                <div className="watchlist-page-header">
                    <h1>Your Watchlist</h1>
                    <button className="btn" onClick={updateShowForm}>Create List</button>
                </div>
                <div className="watchlist-div">
                    {userWatchlistAll.length != 0 ?
                        userWatchlistAll.map((list, index) => (
                            <WatchList
                                key={index}
                                watchlist={list}
                                updateList={updateList}
                            />
                        ))
                        :
                        <h1>You don't have a watchlist yet</h1>
                    }

                </div>
            </div>
        </>
    )
}
