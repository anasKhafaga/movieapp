const express = require('express');

const app = express();

// routes
app.get('/', (req, res, next) => {
  res.redirect('/user');
});
 
app.get('/user', (req, res, next) => {
  res.send('Welcome to user page');
})



module.exports = app;