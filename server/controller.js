const models = require('../database/models.js');

const controller = {
  get: (req, res) => {
    models.getReviews()
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(400).send(err);
    })
  },
  post: (req, res) => {
    models.addReview(req.body)
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(400).send(err);
    })
  },
  put: (req, res) => {
    models.updateReview({_id: req.params.id}, req.body)
    .then(results => {
      res.status(202).send(results);
    })
    .catch(err => {
      res.status(400).send('updated your review!');
    })
  },
  delete: (req, res) => {
    models.deleteReview({_id: req.params.id})
    .then(results => {
      res.status(202).send('review deleted!');
    })
    .catch(err => {
      res.status(400).send(err);
    })
  },
}

module.exports = controller;