const authRouter = require('./auth');
const movieRouter = require('./movie');

module.exports = (app) => { 
  app.use('/auth', authRouter);
  app.use(movieRouter);
};