const express = require('express');

const routes = express.Router();
const dislikeController = require('../../controllers/dislike.controller');

// POST /v1/dislike/store/:devId
routes.post('/store/:devId', dislikeController.store);

module.exports = routes;
