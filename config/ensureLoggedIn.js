/*========================================
        Login Confirmation
========================================*/
function ensureLoggedIn(req, res, next) {
    if (!req.user) return res.status(401).json("Unauthorized User")
    next()
}

/*========================================
        Exports
========================================*/
module.exports = ensureLoggedIn