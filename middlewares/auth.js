const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

module.exports = (req, res, next) => { 
  if (!req.get('Authorization')) {
    return next(createError(401));
  }

  const token = req.get('Authorization').split(' ')[1];
  const secret = readFileSync('./private.key');
  try {
    const decode = jwt.verify(token, secret);
    req.user = { _id: decode._id, username: decode.username };
    next();
  } catch (err) {
    next(createError(401));
  }
};