const express = require('express');
const { logger } = require('./configuration')

const middleware = require('./middlewares');

const routes = require('./routes')

const app = express();

process.on('unhandledRejection', (reason) => {
  logger.error(reason);
  process.exit(1);
});

middleware(app);

// routes
routes(app);



module.exports = app;