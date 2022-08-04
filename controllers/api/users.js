/*========================================
        Require Dependences
========================================*/
const User = require("../../models/user.js")
const Listing = require("../../models/listing.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
/*========================================
        Exports
========================================*/
module.exports = {
    checkToken,
    login,
    create,
    addToRecentlyViewed,
    getUserRecentViewed,
    // remove
}

/*========================================
        User Functions
========================================*/
function checkToken(req, res) {
    console.log("req.user:", req.user)
    res.json(req.exp)
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        console.log("match :", match)
        if (!match) throw new Error()
        res.json(createJWT(user))
    } catch {
        res.status(400).json("Invalid Credentials")
    }
}

// create user function
async function create(req, res) {
    console.log("Here")
    try {
        const user = await User.create(req.body)
        console.log(user)
        const token = createJWT(user)
        res.json(token)
        console.log(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function getUserRecentViewed(req, res) {
    const user = await User.findById(req.user._id)
    console.log(user)
    
    const userRecentlyViewed = user.recently_viewed
    console.log(userRecentlyViewed)
    res.json(userRecentlyViewed)
}

async function addToRecentlyViewed(req, res) {
    // console.log("User Id: ", req.user._id)
    // console.log("Listing Id: ", req.params.listingId)
    const recentlyViewed = await Listing.findById(req.params.listingId)
    const userTemp = await User.findById(req.user._id)
    let found = false
    userTemp.recently_viewed.forEach((element) => {
        if (element.listingId.equals(recentlyViewed._id)) {
            found = true
            return
        }
    })

    if (found) {
        res.json(userTemp)
    } else {
        if(userTemp.recently_viewed.length >= 10) {
            userTemp.recently_viewed.shift()
            userTemp.recently_viewed.push({
                listingId: recentlyViewed._id,
                img: recentlyViewed.primary_photo.href,
                line: recentlyViewed.location.address.line,
            })
        } else {
            userTemp.recently_viewed.push({
                listingId: recentlyViewed._id,
                img: recentlyViewed.primary_photo.href,
                line: recentlyViewed.location.address.line,
            })
        }
        const user = await User.findByIdAndUpdate(req.user._id,
            {
                    recently_viewed: userTemp.recently_viewed
            })
        res.json(user)
    }
}

// // delete user function
// async function remove(req, res) {
//     try {
//         const user = await User.findOneAndDelete({ _id: req.body._id })
//         console.log(user)
//         res.json(user)
//     } catch (err){
//         res.status(400).json(err)
//     }
// }

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