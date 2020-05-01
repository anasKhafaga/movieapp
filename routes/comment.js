const { Router } = require('express');
const { postComment } = require('../controllers');
const {auth } = require('../middlewares')

const router = Router();

router.post('/createComment/:movieId', auth, postComment);

module.exports = router;