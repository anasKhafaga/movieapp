const { Router } = require('express');
const { getMovies } = require('../controllers');

const router = Router();

router.get('/movies/:page', getMovies)

module.exports = router;