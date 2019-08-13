// load environment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = require('./config/data').port;

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD");
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set routes
app.use(require('./app/routes'));

app.listen(port, () => {
  console.log(`the application is running on port ${port}`);
});
