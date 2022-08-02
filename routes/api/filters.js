/*========================================
        Import Dependencies
========================================*/
const express = require("express")
const router = express.Router()
const filtersCtrl = require("../../controllers/api/filters.js")

/*========================================
        Routes
========================================*/
// get all route
router.get("/", filtersCtrl.getAll)

/*========================================
        Exports
========================================*/
module.exports = router