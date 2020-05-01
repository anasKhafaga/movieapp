const { MongoClient } = require('mongodb');

const _uri = process.env.MONGODB_URI;

const dbCon = (coll, cb, coll2) => {
  MongoClient.connect(_uri)
    .then(async (client) => {
      const db = client.db('sample_mflix').collection(coll);
      let db2;
      if (coll2) {
        db2 = client.db('sample_mflix').collection(coll2);
      }
      await cb(db, db2);
      client.close();
    });
};
 
module.exports = dbCon;