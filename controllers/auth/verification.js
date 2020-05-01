const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const createError = require('http-errors');
const { dbCon } = require('../../configuration')

const secret = readFileSync('./private.key');

const getVerify = (req, res, next) => { 

  const token = req.query['token'];

  try {
    const decoded = jwt.verify(token, secret);
    
    
  } catch (err) {
    next(createError(400))
  };

};

module.exports = {
  getVerify
}