/*========================================
        Import Dependencies
========================================*/
const Listing = require("../../models/listing.js")

/*========================================
        Listing funcitons
========================================*/
// index
async function index(req, res) {
    const listings = await Listing.find({})
    res.json(listings)
}

// show

// search

/*========================================
        Exports
========================================*/
module.exports = {
    index,
}