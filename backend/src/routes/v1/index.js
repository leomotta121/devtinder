const express = require('express');
const routes = express.Router();

const devRoutes = require('./dev.routes');
const likeRoutes = require('./like.routes');

routes.use('/dev', devRoutes);
routes.use('/like', likeRoutes);

module.exports = routes;
