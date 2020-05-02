/**
 * verification routes handlers
 * @module controllers/auth/verification
 */

const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const createError = require('http-errors');
const { dbCon } = require('../../configuration')

const secret = readFileSync('./private.key');

/**
 * get verified
 * @function getVerify
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Callback} next - callback
 */
const getVerify = (req, res, next) => { 

  const token = req.query['token'];

  try {
    const decoded = jwt.verify(token, secret);
        
    dbCon('users', async (db) => { 
      const modifiedDoc = await db.updateOne({ username: decoded['username'] }, { '$set': { verified: true } });

      if (modifiedDoc.modifiedCount === 0) {
        return next(createError(404));
      }

      res.json({
        message: 'Your account has been verified!'
      })
      
    });
    
  } catch (err) {
    next(createError(400))
  };

};

module.exports = {
  getVerify
}