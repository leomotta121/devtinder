const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const ApiError = require('./services/apiError');
const v1 = require('./routes/v1');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1', v1);

// Catch 404
app.use((req, res, next) => {
  const error = new ApiError('Not found', 404, 'Route not found.');
  next(error);
});

// Catch errors
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message, status: status });
});

mongoose.connect(
  'mongodb://127.0.0.1:27017/devtinder',
  { useNewUrlParser: true, useCreateIndex: true },
  err => {
    if (err) {
      console.log('00000000000', err);
    } else {
      console.log('connected to database');
    }
  }
);

server.listen(3333, () => {
  console.log('app listening on post 3333');
});
