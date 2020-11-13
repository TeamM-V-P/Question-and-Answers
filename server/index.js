const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');
const app = express();
const port = 3000;

app.use('/', router);


app.listen(port, () => {
  console.log('server running on port ' + port)
});
