const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const v1 = require('./routes/v1/app.routes');

const app = express();

cors();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1', v1);

app.listen(3333, () => {
  console.log('app listening on post 3333');
});
