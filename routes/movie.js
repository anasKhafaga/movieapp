/**
 * movie router
 * @module routes/movie
 */

const { Router } = require('express');
const { getMovies, getOneMovie } = require('../controllers');
const { auth } = require('../middlewares');

/**
 * @type {Object}
 * @namespace movieRouter
 */
const router = Router();

router
  /**
   * @function get
   * @param {string} /movies/:page
   * @param {Callback} getMovies {@link module:controllers/movie~getMovies}
   */
  .get('/movies/:page', getMovies)
  /**
   * @function get
   * @param {string} /movie/:id
   * @param {Callback} auth {@link module:middlewares/auth~auth} Express middleware
   * @param {Callback} getOneMovie {@link module:controllers/movie~getOneMovie}
   */
  .get('/movie/:id', auth, getOneMovie);

module.exports = router;