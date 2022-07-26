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

// Search Route
router.post("/filtered", listingsCtrl.getFiltered)
// Show Route
router.get("/:id", listingsCtrl.show)
/*========================================
        Exports
========================================*/
module.exports = router