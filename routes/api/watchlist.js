/*========================================
        DEPENDENCIES
========================================*/
const express = require('express')
const router = express.Router();
const watchlistCtrl = require('../../controllers/api/watchlist.js')

/*========================================
        ROUTES
========================================*/
// Index Route
router.get('/', watchlistCtrl.index);

// Show route
router.get('/:id', watchlistCtrl.show);

/*========================================
        EXPORTS
========================================*/
module.exports = router;