const { User } = require('../../models');
const createError = require('http-errors');
const postLogin = (req, res, next) => { 

  User.login(req.body)
    .then(result => {
      
      if (result instanceof Error) {
        return next(result);
      }
      
      res.json(result);
      
    })
    .catch(err => {
      next(createError(500));
    });
  
};

module.exports = {
  postLogin
}