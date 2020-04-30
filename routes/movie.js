const { Router } = require('express');
const { getMovies, getOneMovie } = require('../controllers');
const { auth } = require('../middlewares');

const router = Router();

router
  .get('/movies/:page', auth, getMovies)
  .get('/movie/:id', getOneMovie)

module.exports = router;