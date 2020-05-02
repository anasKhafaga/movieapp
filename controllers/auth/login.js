/**
 * login routes handlers
 * @module controllers/auth/login
 */

const { User } = require('../../models');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

/**
 * post login
 * @function postLogin
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Callback} next - callback
 */
const postLogin = (req, res, next) => { 

  User.login(req.body)
    .then(result => {
      
      if (result instanceof Error) {
        return next(result);
      }
      
      const secret = readFileSync('./private.key');
      const token = jwt.sign({ _id: result._id, username: result.username }, secret, {
        expiresIn: '24h'
      });
      
      res.json({token});
      
    })
    .catch(err => {
      next(createError(500));
    });
  
};

module.exports = {
  postLogin
}