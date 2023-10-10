module.exports = (req, res, next) => {
    console.log(req.isAuthenticated());
    
    if (req.isAuthenticated()) {
        res.redirect("/");
    };

    return next();
}