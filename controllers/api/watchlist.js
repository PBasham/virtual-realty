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
}
/*========================================
        WatchList functions
========================================*/
async function index(req, res) {
    const userWatchlistAll = await WatchList.find({userId: req.user._id});
    console.log("userWatchListAll: ",userWatchlistAll)
    
res.json(userWatchlistAll);
}

async function show(req, res) {
const userWatchList = await WatchList.findById(req.params.id);
console.log("userWatchList :", userWatchList)

res.json(userWatchList);
}

// create watchlist
async function create(req, res) {
    const newListData = {
        userId: req.user._id,
        WatchListName: req.body.WatchListName
    }
    const newList = WatchList.create(newListData)
    res.json(newList);
}
// delete watchlist

// add listing

// remove listing