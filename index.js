require('dotenv').config();
const http = require('http');
const app = require('./app');

/**
 * @type {httpServer}
 * @const
 */
const server = http.createServer(app);

/**
 * @function serverListener
 * @param {number} port - port
 * @param {Callback} listener
 */
server.listen(process.env.PORT, () => {
  console.log(`Server is listening now on port ${process.env.PORT}`);
});