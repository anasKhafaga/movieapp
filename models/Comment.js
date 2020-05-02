/**
 * Comment model
 * @module models/Comment
 * @requires module:configuration
 */

const Joi = require('@hapi/joi');
const { dbCon } = require('../configuration');

class Comment {
  /**
   * create a comment instance
   * @param {Object} commentData - user input with some details about comment and add createdAt / modifiedAt
   */
  constructor(commentData) {
    this.data = commentData;
    this.data.createdAt = new Date();
    this.data.modifiedAt = new Date();
  }

  /**
   * validate a comment
   * @param {string} commentText - user input
   * @static
   * @returns {?Object}
   */
  static validate(commentText) {
    const validation = Joi.string().max(300).validate(commentText);

    if (validation.error) {
      const error = new Error(validation.error.message);
      error.statusCode = 400;
      return error;
    }

    return null;
  }

  /**
   * save a comment to movies coll and comments coll
   * @returns {Promise}
   */
  save() {
    return new Promise((res, rej) => {
      dbCon('comments', async (db, db2) => {
        try {
          const comment = await db.insertOne(this.data);
          this.data['id'] = comment.insertedId;
          await db2.updateOne({ _id: this.data['movieId'] }, {
            '$push': {
              comments: {
                '$each': [{_id: this.data['id'], username: this.data['username'], text: this.data['text']}],
                '$slice': -10
              }
            }
          })
          res();
        } catch (err) {
          rej(err);
        }
      }, 'movies');
    });
  }

  /**
   * 
   * @param {ObjectId} commentId 
   * @param {string} text - text to be added
   * @static
   * @returns {Promise}
   */
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

  /**
   * delete a comment from db
   * @param {ObjectId} commentId 
   * @static
   * @returns {Promise}
   */
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
