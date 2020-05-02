/**
 * @module routes
 * @requires module:routes/auth
 * @requires module:routes/movie
 * @requires module:routes/comment
 */

const authRouter = require('./auth');
const movieRouter = require('./movie');
const commentRouter = require('./comment');

/**
 * @function routes
 * @param {Object} app - Express app
 */
module.exports = (app) => { 
  /**
   * @function use
   * @param {string} /auth
   * @param {Module} authRouter {@link module:routes/auth}
   */
  app.use('/auth', authRouter);
  /**
   * @function use
   * @param {Module} authRouter {@link module:routes/movie}
   */
  app.use(movieRouter);
    /**
   * @function use
   * @param {Module} authRouter {@link module:routes/comment}
   */
  app.use(commentRouter);
};