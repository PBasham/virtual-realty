/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import * as watchlistAPI from "../../../utilities/watchlist-api.js"

export default function CreateWatchListForm({ updateShowForm, addList}) {

    const [newListName, setNewListName] = useState({

    })

    const handleChange = (e) => {
        setNewListName({WatchListName: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()
        // logic to create new list!!!
        const newList = await watchlistAPI.createList(newListName)
        addList(newList)
        updateShowForm()
    }

    return (
        <div className="create-watchlistform-wrapper">
            {/* <div className="create-watchlistform"> */}
            <form onSubmit={handleSubmit} className="create-watchlistform">
                <div className="close-btn" onClick={updateShowForm}>X</div>
                <label>Name your new list</label>
                <input type="text" name="list" value={newListName.WatchListName} onChange={handleChange} autoFocus/>
                <button type="submit" className="btn">Create</button>
            </form>
            {/* </div> */}
        </div>
    )
}
