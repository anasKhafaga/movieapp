/**
 * comment router
 * @module routes/comment
 */

const { Router } = require('express');
const { postComment, deleteComment, putComment, getComments } = require('../controllers');
const {auth } = require('../middlewares')

/**
 * @type {Object}
 * @namespace commentRouter
 */
const router = Router();

router
  /**
   * @function get
   * @param {string} /getComments/:movieId/:page
   * @param {Callback} auth {@link module:middlewares/auth~auth} Express middleware
   * @param {Callback} getComments {@link module:controllers/comment~getComments}
   */
  .get('/getComments/:movieId/:page', auth, getComments)
  /**
   * @function post
   * @param {string} /createComment/:movieId
   * @param {Callback} auth {@link module:middlewares/auth~auth} Express middleware
   * @param {Callback} postComment {@link module:controllers/comment~postComment}
   */
  .post('/createComment/:movieId', auth, postComment)
  /**
   * @function put
   * @param {string} /editComment/:commentId
   * @param {Callback} auth {@link module:middlewares/auth~auth} Express middleware
   * @param {Callback} putComment {@link module:controllers/comment~putComment}
   */
  .put('/editComment/:commentId', auth, putComment)
  /**
   * @function delete
   * @param {string} /deleteComment/:commentId
   * @param {Callback} auth {@link module:middlewares/auth~auth} Express middleware
   * @param {Callback} deleteComment {@link module:controllers/comment~deleteComment}
   */
  .delete('/deleteComment/:commentId', auth, deleteComment);

module.exports = router;