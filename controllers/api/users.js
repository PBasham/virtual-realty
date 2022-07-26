/*========================================
        Require Dependences
========================================*/
const User = require("../../models/user.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

/*========================================
        Exports
========================================*/
module.exports = {

}

/*========================================
        User Functions
========================================*/
function checkToken(req, res) {
    console.log("req.user:", req.user)
    res.json(req.exp)
}