const { Router } = require('express');
const { getLogin, postSignup } = require('../controllers');

const router = Router();

router
  .post('/login')
  .post('/signup', postSignup)

module.exports = router;
