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