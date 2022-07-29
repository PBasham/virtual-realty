/*========================================
        Import Dependencies
========================================*/
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/*========================================
        WatchList Schema
========================================*/
const WatchListSchema = new Schema (
    {
        userId: {
            type: String,
            require: true,
        },
        WatchListName: {
            type: String,
            required: true,
        },
        listings: Array,
        /* Listing array will use
            listingId:
            listingPhoto:
            listingPrice
            listingLine
        */
    },
    {
        timestamps: true,
    }
)

/*========================================
        Export Model
========================================*/
module.exports = mongoose.model("WatchList", WatchListSchema)