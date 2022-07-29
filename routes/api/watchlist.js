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

/*========================================
        Exports
========================================*/
module.exports = router;