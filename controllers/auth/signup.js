const { User } = require('../../models')
const createError = require('http-errors');

const postSignup = (req, res, next) => { 
  // validation
  const validation = User.validate(req.body);
  if (validation.error) {
    const error = new Error(validation.error.message);
    error.statusCode = 400;
    return next(error);
  }

  // check existence
  const user = new User(req.body);
  user.checkExistence()
    .then(result => {
      if (result.check) {
        const error = new Error(result.message);
        error.statusCode = 409;
        return next(error);
      }
    })
    .catch(err => next(createError(500)));
};

module.exports = {postSignup};