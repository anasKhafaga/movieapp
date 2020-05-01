const { ObjectId } = require('bson');
const createError = require('http-errors');
const { Comment } = require('../models');

const postComment = (req, res, next) => { 

  if (!ObjectId.isValid(req.params.movieId)) {
    return next(createError(400));
  }
  
  const error = Comment.validate(req.body['text']);
  if (error) { 
    return next(error);
  };

  const commentData = { text: req.body['text'] };
  commentData.userId = new ObjectId(req.user['_id']);
  commentData.username = req.user['username'];
  commentData.movieId = new ObjectId(req.params['movieId']);

  const comment = new Comment(commentData);

  comment.save()
    .then(() => { 
      res.status(201).json({
        message: 'the comment has been successfully created'
      })
    })
    .catch(err => next(createError(500)));
  
};

module.exports = {
  postComment
}