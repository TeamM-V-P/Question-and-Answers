/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3003;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api/q&a', router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
