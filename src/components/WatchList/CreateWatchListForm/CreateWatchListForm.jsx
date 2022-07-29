/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"

export default function CreateWatchListForm({ updateShowForm }) {

    const [newListName, setNewListName] = useState("")

    const handleChange = (e) => {
        setNewListName(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("I've been clicked!")
        updateShowForm()
    }

    return (
        <div className="create-watchlistform-wrapper">
            {/* <div className="create-watchlistform"> */}
            <form onSubmit={handleSubmit} className="create-watchlistform">
                <div className="close-btn" onClick={updateShowForm}>X</div>
                <label>Name your new list</label>
                <input type="text" name="list" value={newListName} onChange={handleChange}/>
                <button type="submit" className="btn">Create</button>
            </form>
            {/* </div> */}
        </div>
    )
}
