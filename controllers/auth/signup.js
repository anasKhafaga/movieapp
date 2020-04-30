const { User } = require('../../models')

const postSignup = (req, res, next) => { 
  const validation = User.validate(req.body);
  if (validation.error) {
    const error = new Error(validation.error.message);
    error.statusCode = 400;
    return next(error);
  }
};

module.exports = {postSignup};