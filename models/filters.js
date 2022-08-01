/*========================================
        Import Dependencies
========================================*/
const mongoose = require("mongoose")
const Schema = mongoose.Schema

/*========================================
        WatchList Schema
========================================*/
const FilterSchema = new Schema (
    {
        tags:  [],
        counties: [],
        cities: [],
    },
    {
        timestamps: true,
    }
)

/*========================================
        Export Model
========================================*/
module.exports = mongoose.model("Filter", FilterSchema)