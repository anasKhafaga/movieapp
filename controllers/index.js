const { getLogin } = require('./auth/login');
const { getMovies, getOneMovie } = require('./movieC');

module.exports = {
  getLogin,
  getMovies,
  getOneMovie
}