const express = require('express');

const routes = express.Router();
const appController = require('../../controllers/app.controller');

routes.get('/index', appController.index);
routes.post('/store', appController.store);

module.exports = routes;
