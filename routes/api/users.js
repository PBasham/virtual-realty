/*========================================
        Require Dependencies
========================================*/
const express = require("express")
const router  = express.Router()
const usersCtrl = require("../../controllers/api/users.js")
const ensureLoggedIn = require("../../config/ensureLoggedIn")

/*========================================
        Routes
========================================*/


module.exports = router