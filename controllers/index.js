const { postLogin } = require('./auth/login');
const { postSignup } = require('./auth/signup');
const { getMovies, getOneMovie } = require('./movieC');

module.exports = {
  postLogin,
  getMovies,
  getOneMovie,
  postSignup
}