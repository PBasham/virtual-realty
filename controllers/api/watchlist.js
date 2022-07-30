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
}
/*========================================
        WatchList functions
========================================*/
async function index(req, res) {
    const userWatchlistAll = await WatchList.find({userId: req.user._id});
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
    const addedListing = await WatchList.findByIdAndUpdate(req.params.watchlistId, {
        $push: { listings: req.body}
    })
    res.json(addedListing)
}
// remove listing