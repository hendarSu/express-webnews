const express = require("express");
const HomeController = require("../../controllers/home.controller");
const homeRouter = express.Router();

const homeController = new HomeController

homeRouter.get('/', homeController.indexHome);
homeRouter.get('/feedback', homeController.indexFeedback);


module.exports = homeRouter;