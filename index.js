// load environment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = require('./config/data').port;

app.use(bodyParser.json());

// set routes
app.use(require('./app/routes'));

app.listen(port, () => {
  console.log(`the application is running on port ${port}`);
});
