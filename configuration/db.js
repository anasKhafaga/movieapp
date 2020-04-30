const { MongoClient } = require('mongodb');

const _uri = process.env.MONGODB_URI;

const dbCon = (coll, cb) => {
  MongoClient.connect(_uri)
    .then(async (client) => {
      const db = client.db('sample_mflix').collection(coll);
      await cb(db);
      client.close();
    });
};
 
module.exports = dbCon;