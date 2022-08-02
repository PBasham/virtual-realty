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
    // console.log(listing)
    res.json(listing)
}

// search
async function getFiltered(req, res) {
    console.log("req.body :", req.body)
    // check if there is more then one condition
    let filterCheck = {
        count: 0,
        filters: []
    }
    let multipleCondition = await function checkFilters() {
        if(req.body.city) {
            filterCheck.count += 1
            filterCheck.filters.push({"location.address.city": req.body.city})
        }
        if(req.body.county) {
            filterCheck.count += 1
            filterCheck.filters.push({"location.county.name": req.body.county})
        }
        if(req.body.tags.length) {
            filterCheck.count += 1
            filterCheck.filters.push({"tags": req.body.tags})
        }
        console.log(filterCheck.filters)
        console.log({ $and: [...filterCheck.filters]})
        // console.log({and: {...filterCheck.filters}})
        return filterCheck.count > 1 ? true : false
    }
    multipleCondition()
    let listings = null

    if( filterCheck.count) {
        // multiple filters
        if(filterCheck.count > 1) {
            listings = await Listing.find({ $and: [...filterCheck.filters]})
        } else {
            // one filter
            listings = await Listing.find(filterCheck.filters[0])
        }

    } else {
        // no filters
        listings = await Listing.find({})
    }

        // $and: [
        //     {"location.county.name": { $exist: req.body.county}},
        // ]
    console.log(req.body)
    res.json(listings)
}


// showhouses
async function getSpotlightHouses(req, res) {
    const showHouses = await Listing.find({ primary_photo: { $ne: null } }, {}, { sort: { '_id': -1 } }).sort().limit(3)
    console.log("show houses to return: ", showHouses[0])

    const returnShowHouses = {
        showHouse: {
            listingId: showHouses[0]._id,
            photo: showHouses[0].primary_photo.href,
            price: showHouses[0].list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            line: showHouses[0].location.address.line,
            location: `${showHouses[0].location.address.city} ${showHouses[0].location.address.state}`,
        },
        listHouses: [
            {
                listingId: showHouses[1]._id,
                photo: showHouses[1].primary_photo.href,
                price: showHouses[1].list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                line: showHouses[1].location.address.line,
                location: `${showHouses[1].location.address.city} ${showHouses[0].location.address.state}`,
            },
            {
                listingId: showHouses[2]._id,
                photo: showHouses[2].primary_photo.href,
                price: showHouses[2].list_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                line: showHouses[2].location.address.line,
                location: `${showHouses[2].location.address.city} ${showHouses[0].location.address.state}`,
            },
        ]
    }

    console.log("show houses to return: ", returnShowHouses)
    res.json(returnShowHouses)
}
/*========================================
        Exports
========================================*/
module.exports = {
    index,
    show,
    getSpotlightHouses,
    getFiltered,
}