const mongoose = require('mongoose');
const LogModel = require('./models').LogModel; 

module.exports = {
  showHome: (req, res) => {
    res.send('hello world!!!');
    console.log(LogModel);
  },
  handleLogs: (req, res) => {
    console.log('handling log data ...\n', req.body);
    const { type } = req.body.event;
    const Logger = mongoose.model(type, LogModel);
    const Log = new Logger(req.body);
    Log.save()
      .then(() => console.log('data succesfully inserted'));
    res.send({ challenge: req.body.challenge });
  }
};
