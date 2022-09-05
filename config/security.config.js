exports.ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('req.isAuthenticated()', req.isAuthenticated())
        next();
    } else {
        res.status(403);
    }
}