const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = require('./config/data').port;

app.use(bodyParser.json());

mongoose.connect(
  'mongodb://localhost:27017/loggs',
  { useNewUrlParser: true }
);

// set routes
app.use(require('./app/routes'));

app.listen(port, () => {
  console.log(`the application is running on port ${port}`);
});
