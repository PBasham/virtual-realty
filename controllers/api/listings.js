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
    console.log("Listings(Ctrl): ", listings)
    
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