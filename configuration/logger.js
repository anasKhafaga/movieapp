/**
 * Logger
 * @module configuration/logger
 */

const { createLogger, transports } = require('winston');

/**
 * @type {WinstonLogger}
 */
const infoLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/infoLogs.log',
      level: 'info'
    })
  ]
})

infoLogger.stream = {
  /**
   * create write stream to the logger
   * @method write
   * @param {string} message - message to be logged
   * @param {string} encoding - encoding scheme
   */
  write: (message, encoding) => {
    infoLogger.info(message);
  }
}

module.exports = infoLogger;