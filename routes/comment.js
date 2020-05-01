const { Router } = require('express');
const { postComment, deleteComment, putComment, getComments } = require('../controllers');
const {auth } = require('../middlewares')

const router = Router();

router
  .get('/getComments/:movieId/:page', auth, getComments)
  .post('/createComment/:movieId', auth, postComment)
  .put('/editComment/:commentId', auth, putComment)
  .delete('/deleteComment/:commentId', auth, deleteComment);

module.exports = router;