const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = require('./config/data').port;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/slack', (req, res) => {
  console.log('bateu oe', req.body);
  res.send({ challenge: req.body.challenge });
});

app.listen(port, () => {
  console.log(`the application is running on port ${port}`);
});
