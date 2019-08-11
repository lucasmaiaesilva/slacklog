const mongodb = require('mongodb').MongoClient;
module.exports = {
  showHome: (req, res) => {
    const mainPage = `
      <p>The application is running! Please access
        <a href="/logs">/logs</a>
        to see the logs list
      </p>
    `;
    res.send(mainPage);
  },
  handleLogs: async (req, res) => {
    if (req.body.challenge) {
      return res.send(req.body.challenge);
    }
    const client = await mongodb.connect(
      process.env.DB_URI,
      { useNewUrlParser: true }
    );

    const db = client.db(process.env.DB_NAME);
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
    const db = client.db(process.env.DB_NAME);

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
