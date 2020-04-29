const logger = require('../../configuration/logger');

module.exports.getLogin = (req, res, next) => {
  logger.info('hello');
  res.send('Welcome to login page');
};