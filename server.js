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
app.use(express.json)

app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))

// Middleware that will verify the token and assign a user object of patload to req.user (must come before routes)
// app.use(require("./config/checkToken"))
