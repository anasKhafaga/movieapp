const Joi = require('@hapi/joi');
const { dbCon } = require('../configuration');

class Comment {
  constructor(commentData) {
    this.data = commentData;
    this.data.createdAt = new Date();
    this.data.modifiedAt = new Date();
  }

  static validate(commentText) {
    const validation = Joi.string().max(300).validate(commentText);

    if (validation.error) {
      const error = new Error(validation.error.message);
      error.statusCode = 400;
      return error;
    }

    return null;
  }

  save() {
    return new Promise((res, rej) => {
      dbCon('comments', async (db) => {
        try {
          await db.insertOne(this.data);
          res();
        } catch (err) {
          rej(err);
        }
      });
    });
  }

  static edit(commentId, text) { 

    return new Promise((res, rej) => { 
      dbCon('comments', async(db) => { 
        try {

          await db.updateOne({ _id: commentId }, { '$set': { text }, '$currentDate': {modifiedAt: true} });
          res();
          
        } catch (err) {
          rej(err);
        }
      });
    });
    
  };

  static delete(commentId) {
    return new Promise((res, rej) => { 
      dbCon('comments', async(db) => {
        try { 
          await db.deleteOne({ _id: commentId });
          res();
        } catch (err) { }
      });
    });
  }
}

module.exports = Comment;
