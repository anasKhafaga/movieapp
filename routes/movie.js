const { Router } = require('express');
const { getMovies, getOneMovie } = require('../controllers');

const router = Router();

router
  .get('/movies/:page', getMovies)
  .get('/movie/:id', getOneMovie)

module.exports = router;