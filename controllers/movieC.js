const { dbCon } = require('../configuration')
const { ObjectId } = require('bson');

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


const getOneMovie = (req, res, next) => { 
  const _id = new ObjectId(req.params.id);
  dbCon('movies', async (db) => { 
    const movie = await db.findOne({ _id });
    if (!movie) {
      return res.status(404).send('Not Found');
    }
    res.json(movie);
  });
};


module.exports = {
  getMovies,
  getOneMovie
}