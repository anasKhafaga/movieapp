const { Router } = require('express');
const { postLogin, postSignup } = require('../controllers');

const router = Router();

router
  .post('/login', postLogin)
  .post('/signup', postSignup)

module.exports = router;
