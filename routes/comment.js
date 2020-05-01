const { Router } = require('express');
const { postComment, deleteComment, putComment } = require('../controllers');
const {auth } = require('../middlewares')

const router = Router();

router
  .post('/createComment/:movieId', auth, postComment)
  .put('/editComment/:commentId', auth, putComment)
  .delete('/deleteComment/:commentId', auth, deleteComment);

module.exports = router;