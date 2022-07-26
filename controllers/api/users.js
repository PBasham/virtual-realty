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
    checkToken,
    login,
    create,
    remove,
}

/*========================================
        User Functions
========================================*/
function checkToken(req, res) {
    console.log("req.user:", req.user)
    res.json(req.exp)
}

async function login( req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        console.log("Req.Body: ", req.body)
        if (!user) throw new Error()
        const match = await bcrypt.compate(req.body.password, user.password)
        if (!match) throw new Error()
        res.json(createJWT(user))
    } catch {
        res.status(400).json("Invalid Credentials")
    }
}

// create user function
async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

// delete user function
async function remove(req, res) {
    try {
        const user = await User.findOneAndDelete({ _id: req.body._id })
        console.log(user)
        res.json(user)
    } catch (err){
        res.status(400).json(err)
    }
}

/*========================================
        Helper Functions
========================================*/
// JWT creation
function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: "24hr" }
    )
}