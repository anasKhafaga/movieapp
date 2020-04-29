const { dbCon } = require('../configuration')

const getMovies = (req, res, next) => { 
  const pageNum = parseInt(req.params.page);

  if (isNaN(pageNum)) {
    return res.status(400).send('bad request');
  }

  const moviesToSkip = (pageNum - 1) * 10;

  dbCon('movies', async (db) => { 
    const movies = await db.find({}).skip(moviesToSkip).limit(10).toArray();
    res.json(movies);
  });
};

module.exports = {
  getMovies
}