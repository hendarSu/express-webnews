const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

authRouter.post('/login',
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    })
);
authRouter.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/login');
    })
})

module.exports = authRouter;