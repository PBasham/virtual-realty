/*========================================
        Import Dependencies
========================================*/
const Filters = require("../../models/filters.js")

/*========================================
        Listing funcitons
========================================*/
// index
async function getAll(req, res) {
    const filters = await Filters.find({})
    res.json(filters)
}
/*========================================
        Exports
========================================*/
module.exports = {
    getAll,
}