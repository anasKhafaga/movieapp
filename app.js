const express = require('express');

const app = express();

// routes
app.get('/', (req, res, next) => {
  res.send('Welcome to homepage');
});
 
app.get('/user/:id/:postId', (req, res, next) => {
  const host = req.get('Host');
  console.log(host);
  res.send('Welcome to user page after nodemon');
})



module.exports = app;