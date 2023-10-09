const express = require("express");
const api = express.Router();

const HomeController = require("../../controllers/home.controller");
const CommentController = require("../../controllers/comment.controller");
const UserController = require("../../controllers/user.controller");

const homeController = new HomeController;
const commentController = new CommentController;
const userController = new UserController;

// Endpoint News
api.get('/v1/news', homeController.getNews);
api.get('/v1/news/:id', homeController.getNewsById);
api.post('/v1/news', homeController.storeNews);

// Endpoint Comment
api.post('/v1/comments', commentController.storeComment);

// Endpoint user
api.post('/v1/users/register', userController.register);

module.exports = api;