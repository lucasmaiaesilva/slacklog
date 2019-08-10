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
    const db = client.db('heroku_1lzmbqql');
    console.log(db);
    const types = ['user_change', 'team_join'];
    let objres;
    try {
      types.map(type => {
        const results = await db.collection(type).find({});
        objres.concat(results);
      });
      res.json(objres);
    } catch(e) {
      res.status(502).send({ error: e });
    }
    return client.close();
  }
};
