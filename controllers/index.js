/**
 * route handlers
 * @module controllers
 * @requires module:controllers/movie
 * @requires module:controllers/comment
 * @requires module:controllers/auth/login
 * @requires module:controllers/auth/signup
 * @requires module:controllers/auth/verification
 */

const { postLogin } = require('./auth/login');
const { postSignup } = require('./auth/signup');
const { getVerify } = require('./auth/verification');
const { getMovies, getOneMovie } = require('./movieC');
const { postComment, putComment, deleteComment, getComments } = require('./commentC');

module.exports = {
  postLogin,
  getMovies,
  getOneMovie,
  postSignup,
  getVerify,
  postComment,
  putComment,
  deleteComment,
  getComments
}