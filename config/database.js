/*========================================
        Import Dependencies
========================================*/
const mongoose = require("mongoose")

/*========================================
        Database Conection
========================================*/
const db = mongoose.connection

/*========================================
        Connection to Local MongoDB & MongoAtlas
========================================*/
const MONGODB_URI = process.env.MONGODB_URI

const DATABASE_URL = process.env.DATABASE_URL

const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(MONGODB_URI, CONFIG)

db.on("connected", () => {
    console.log(`Connected to ${db.name} at ${db.host}: ${db.port}`)
})
db.on("close", () => {
    console.log(`Disconnected from ${db.host} at ${db.host}: ${db.port}`)
})
.on("error", (error) => console.log(error))

/*========================================
        Export Modules
========================================*/
module.exports = mongoose