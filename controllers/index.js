const { postLogin } = require('./auth/login');
const { postSignup } = require('./auth/signup');
const { getVerify } = require('./auth/verification');
const { getMovies, getOneMovie } = require('./movieC');
const { postComment, putComment, deleteComment } = require('./commentC');

module.exports = {
  postLogin,
  getMovies,
  getOneMovie,
  postSignup,
  getVerify,
  postComment,
  putComment,
  deleteComment
}