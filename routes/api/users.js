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
// update user
router.post("/verify/email", usersCtrl.verifyEmail)
// update user
router.post("/verify/password", usersCtrl.verifyPassword)

// update user email
router.put("/update/email", usersCtrl.updatedEmail)
// update user password
router.put("/update/password", usersCtrl.updatedPassword)
// update user password
router.put("/update", usersCtrl.updateUser)


// GET user recently viewed
router.get("/recentlyviewed/", usersCtrl.getUserRecentViewed)
// PUT and updated user recently viewed
router.put("/recentlyviewed/:listingId", usersCtrl.addToRecentlyViewed)
// User GET route for JWT token logic
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken)
// User DELETE route for deling a user
router.delete("/delete", usersCtrl.deleteUser)

module.exports = router;