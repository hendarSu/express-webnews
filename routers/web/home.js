const express = require("express");
const passport = require("passport");

const HomeController = require("../../controllers/home.controller");
const NewsController = require("../../controllers/news.controller");
const UserController = require("../../controllers/user.controller");
const homeRouter = express.Router();

const homeController = new HomeController();
const newsController = new NewsController();
const userController = new UserController();


homeRouter.get('/', homeController.indexHome);
homeRouter.get('/news/:id', homeController.newsDetail);
homeRouter.get('/feedback', homeController.indexFeedback);

homeRouter.get('/news-create', newsController.createPageNews);
homeRouter.get('/news-list', (req, res) => {
    res.render('news/news-list', {
        layout: "layouts/layouts"
    })
});

homeRouter.get('/register', userController.indexRegister);
homeRouter.get('/login', userController.indexLogin);

homeRouter.post('/login',
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    })
);
homeRouter.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/login');
    })
})

module.exports = homeRouter;