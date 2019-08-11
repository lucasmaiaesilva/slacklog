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

    const db = client.db('heroku_1lzmbqql');
    console.log(db);
    const { type } = req.body.event;
    try {
      await db.createCollection(type);
      await db.collection(type).insertOne(req.body);
      console.log('req body', req.body);
      res.status(200).send({ success: true });
    } catch(e) {
      res.status(502).send({ error: e });
    }
    return client.close();
  },
  getLogs: async (req, res) => {
    const client = await mongodb.connect(
      process.env.DB_URI,
      { useNewUrlParser: true }
    );

    const db = client.db('heroku_1lzmbqql');
    const types = ['user_change', 'team_join'];
    const result = await Promise.all(types.map(async (eventName) => {
      const data = await getLogsByCollection(db, eventName);
      return {
        event: eventName,
        data
      };
    }));
    res.json(result);
    return client.close();
  }
};

function getLogsByCollection(db,  collectionName) {
  return db.collection(collectionName)
    .find({})
    .toArray();
}
