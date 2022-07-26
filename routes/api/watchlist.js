/*========================================
        Require Dependencies
========================================*/
const express = require('express')
const router = express.Router();
const watchlistCtrl = require('../../controllers/api/watchlist.js')

/*========================================
        WatchList ROUTES
========================================*/
// Index Route
router.get("/", watchlistCtrl.index);

// create route
router.post("/create", watchlistCtrl.create)

// Show route
router.get("/:id", watchlistCtrl.show);

// add to list
router.post("/add/:watchlistId/", watchlistCtrl.addListing)

// delete list 
router.delete("/delete/:watchlistId/", watchlistCtrl.deleteList)

// remove listing from watchlist
router.put("/update/:watchlistId/remove/:listingId", watchlistCtrl.removeListing)
/*========================================
        Exports
========================================*/
module.exports = router;