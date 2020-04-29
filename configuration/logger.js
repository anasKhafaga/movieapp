const { createLogger, transports } = require('winston');

const infoLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/infoLogs.log',
      level: 'info'
    })
  ]
})

module.exports = infoLogger;