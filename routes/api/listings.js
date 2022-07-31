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

// showHouses
router.get("/showhouses", listingsCtrl.getSpotlightHouses)

// Show Route
router.get("/:id", listingsCtrl.show)
// Search Route

/*========================================
        Exports
========================================*/
module.exports = router