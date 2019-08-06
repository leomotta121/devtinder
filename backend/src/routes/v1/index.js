const express = require('express');
const routes = express.Router();

const devRoutes = require('./dev.routes');

routes.use('/dev', devRoutes);

module.exports = routes;
