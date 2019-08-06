const express = require('express');
const routes = express.Router();

const devRoutes = require('./dev.routes');
const likeRoutes = require('./like.routes');
const dislikeRoutes = require('./dislike.routes');

routes.use('/dev', devRoutes);
routes.use('/like', likeRoutes);
routes.use('/dislike', dislikeRoutes);

module.exports = routes;
