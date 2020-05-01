/**
 * contains configuration files of the API
 * @module configuration
 * @requires module:configuration/db
 * @requires module:configuration/logger
 * @requires module:configuration/email
 */

module.exports = {
  logger: require('./logger'),
  dbCon: require('./db'),
  email: require('./email')
}