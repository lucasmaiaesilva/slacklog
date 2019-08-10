const mongodb = require('mongodb').MongoClient;
module.exports = {
  showHome: (req, res) => {
    res.send('hello world!!!');
  },
  handleLogs: async (req, res) => {
    if (req.body.challenge) {
      return res.send(req.body.challenge);
    }
    const client = await mongodb.connect(
      process.env.DB_URI,
      { useNewUrlParser: true }
    );

    const db = client.db('logs');
    console.log(db);
    const { type } = req.body.event;
    await db.createCollection(type);
    await db.collection(type).insertOne(req.body);
    return client.close();
  }
};
