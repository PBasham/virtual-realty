/*========================================
        Import Dependencies
========================================*/
const express = require("express")
const router = express.Router()
const listingsCtrl = require("../../controllers/api/listings.js")

/*========================================
        Routes
========================================*/
// Index Route
router.get("/", listingsCtrl.index)
// Show Route

// Search Route

/*========================================
        Exports
========================================*/
module.exports = router