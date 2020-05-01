/**
 * db is configured here
 * @module configuration/db
 */

const { MongoClient } = require('mongodb');

const _uri = process.env.MONGODB_URI;

/**
 * @function dbConfiguration
 * @param {string} coll - collection name
 * @param {callback} cb - callback for db operations
 * @param {string} [coll2] - collection name
 */
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