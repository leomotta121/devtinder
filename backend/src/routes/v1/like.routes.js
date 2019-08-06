const express = require('express');

const routes = express.Router();
const likeController = require('../../controllers/like.controller');

// POST /v1/like/store/:devId
routes.post('/store/:devId', likeController.store);

module.exports = routes;
