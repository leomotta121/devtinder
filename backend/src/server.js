const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const v1 = require('./routes/v1');

const app = express();

cors();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1', v1);

mongoose.connect(
  'http://localhost:27017/devtinder',
  {
    useNewUrlParser: true
  },
  () => {
    console.log('connected to database');
  }
);

app.listen(3333, () => {
  console.log('app listening on post 3333');
});
