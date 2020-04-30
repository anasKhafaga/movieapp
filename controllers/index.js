const { getLogin } = require('./auth/login');
const { postSignup } = require('./auth/signup');
const { getMovies, getOneMovie } = require('./movieC');

module.exports = {
  getLogin,
  getMovies,
  getOneMovie,
  postSignup
}