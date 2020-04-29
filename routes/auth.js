const { Router } = require('express');
const { getLogin } = require('../controllers');

const router = Router();

router
  .get('/login', getLogin)
  .post('/login')
  .get('/signup')
  .post('/signup')

module.exports = router;
