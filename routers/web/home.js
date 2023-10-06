const express = require("express");
const HomeController = require("../../controllers/home.controller");
const NewsController = require("../../controllers/news.controller");
const homeRouter = express.Router();

const homeController = new HomeController();
const newsController = new NewsController();

homeRouter.get('/', homeController.indexHome);
homeRouter.get('/news/:id', homeController.newsDetail);
homeRouter.get('/feedback', homeController.indexFeedback);

homeRouter.get('/news-create', newsController.createPageNews);

module.exports = homeRouter;