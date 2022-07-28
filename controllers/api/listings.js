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
async function show(req, res) {
    const listing = await Listing.findById(req.params.id)
    console.log(listing)
    
    res.json(listing)
}

// search

/*========================================
        Exports
========================================*/
module.exports = {
    index,
    show,
}