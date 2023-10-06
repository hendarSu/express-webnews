const express = require("express");
const api = express.Router();

const HomeController = require("../../controllers/home.controller");
const CommentController = require("../../controllers/comment.controller");

const homeController = new HomeController;
const commentController = new CommentController;

// Endpoint News
api.get('/v1/news', homeController.getNews);
api.get('/v1/news/:id', homeController.getNewsById);
api.post('/v1/news', homeController.storeNews);

// Endpoint Comment
api.post('/v1/comments', commentController.storeComment);

module.exports = api;