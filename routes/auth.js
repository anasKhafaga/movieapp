/**
 * authRouter
 * @module routes/auth
 */

const { Router } = require('express');
const { postLogin, postSignup, getVerify } = require('../controllers');

/**
 * @type {Object}
 * @namespace authRouter
 */
const router = Router();

router
  /**
   * @function post
   * @param {string} /login
   * @param {Callback} postLogin {@link module:controllers/auth/login~postLogin}
   */
  .post('/login', postLogin)
  /**
   * @function post
   * @param {string} /signup
   * @param {Callback} postSignup {@link module:controllers/auth/signup~postSignup}
   */
  .post('/signup', postSignup)
  /**
   * @function get
   * @param {string} /verify
   * @param {Callback} getVerify {@link module:controllers/auth/verification~getVerify}
   */
  .get('/verify', getVerify);

module.exports = router;
