/*========================================
        Require Dependencies
========================================*/
const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")

// connect to dotenv file and connect to database file.
require("dotenv").config()
require("./config/database.js")

/*========================================
Middleware
========================================*/
const app = express()

app.use(logger("dev"))
app.use(express.json())

app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))

// Middleware that will verify the token and assign a user object of patload to req.user (must come before routes)
app.use(require("./config/checkToken"))
console.log("HERE-!")

/*========================================
        API routes
========================================*/
// base route for users

app.use("/api/users", require("./routes/api/users"))

// require funcion ensure logged in that will run on certain routes
// const ensureLoggedIn = require("./config/ensureLoggedIn.js")

// base route for home

// app.use("/api/home", require("./routes/api/home"))
// base route for listings

// app.use("/api/listings", require("./routes/api/listings"))

// catch all route that will return the index.html for all non-AJAX request.
app.get("/*", function(req,res) {
    console.log("i'm in here")
    
    res.sendFile(path.join(__dirname, "build", "index.html"))
})
/*========================================
        Port and Listener
========================================*/
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Expesss app running on port ${port}`)
})