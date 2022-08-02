/*========================================
        Require Dependencies
========================================*/
const express = require("express")
const router = express.Router()
const usersCtrl = require("../../controllers/api/users.js")
const ensureLoggedIn = require("../../config/ensureLoggedIn")

/*========================================
        Routes
========================================*/
// User POST route for create User
router.post("/", usersCtrl.create)
// User POST route for login
router.post("/login", usersCtrl.login)
// User POST route for login
router.get("/recentlyviewed/", usersCtrl.getUserRecentViewed)
router.put("/recentlyviewed/:listingId", usersCtrl.addToRecentlyViewed)
// User GET route for JWT token logic
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken)
// User DELETE route for deling a user
// router.delete("/delete", usersCtrl.remove)

module.exports = router;