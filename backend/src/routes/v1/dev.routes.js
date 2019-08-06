const express = require('express');

const routes = express.Router();
const devController = require('../../controllers/dev.controller');

// GET /v1/dev/index
routes.get('/index', devController.index);

// POST /v1/dev/store
routes.post('/store', devController.store);

module.exports = routes;
