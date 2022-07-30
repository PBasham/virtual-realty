/*========================================
        Require Dependencies
========================================*/
const WatchList = require("../../models/watchlist.js")


/*========================================
        Export Functions
========================================*/
module.exports = {
    index,
    show,
    create,
    addListing,
    deleteList,
    removeListing,
}
/*========================================
        WatchList functions
========================================*/
async function index(req, res) {
    const userWatchlistAll = await WatchList.find({ userId: req.user._id });
    res.json(userWatchlistAll);
}

async function show(req, res) {
    const userWatchList = await WatchList.findById(req.params.id);
    res.json(userWatchList);
}

// create watchlist
async function create(req, res) {
    const newListData = {
        userId: req.user._id,
        WatchListName: req.body.WatchListName
    }
    const newList = await WatchList.create(newListData)
    res.json(newList);
}
// delete watchlist
async function deleteList(req, res) {
    console.log(req.params.watchlistId)
    const removeWatchlist = await WatchList.findByIdAndDelete(req.params.watchlistId)
    res.json(removeWatchlist)
}
// add listing
async function addListing(req, res) {
    const doesExist = await WatchList.find({ $and: [
        {_id: req.params.watchlistId},
        {"listings.listingId": req.body.listingId}
    ]})

    console.log(doesExist.length)
    
    const addedListing = await (!doesExist.length ? WatchList.findByIdAndUpdate(req.params.watchlistId, {
        $push: { listings: req.body }
    })
    :
    null
    )

    res.json(addedListing)
}
// remove listing
async function removeListing(req, res) {
    console.log("params: ", req.params)
    const removedListing = await WatchList.findByIdAndUpdate(req.params.watchlistId,
        {
            $pull: {
                listings: {listingId: req.params.listingId},
            },
        })
        console.log(removedListing)
    res.json(removedListing)
}