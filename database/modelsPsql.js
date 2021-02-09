const pool = require('./indexPsql.js');

const modelsPsql = {
  getReviews: () => (
    pool.query(`select *
  from reviews
  limit 10;`)
  ),

  getRecent: () => (
    pool.query(`select *
  from reviews
  limit 10;`)
  ),

  getUser: (id) => (
    pool.query(`select *
  from reviews
  where id=${id}
  limit 10;`)
  ),

  getRecent10: () => (
    pool.query(`select * from reviews
  order by id desc
  limit 10;`)
  ),

  getHelpful10: () => (
    pool.query(`select *
  from reviews
  order by upvote
  limit 10;`)
  ),

  getHighest10: () => (
    pool.query(`select *
  from reviews
  order by overallRating
  limit 10;`)
  ),

  getLowest10: () => (
    pool.query(`select *
  from reviews
  order by overallRating
  limit 10;`)
  ),

  addReview: (review) => {

    // Reviews.create(review)
    let keys = Object.keys(review).toString();
    let vals = Object.values(review).toString();
    return pool.query(`insert
    into reviews (${keys})
    values (${vals})`)
  },

  updateReview: (id, review) => {

    // Reviews.findOneAndUpdate({ _id: id }, review)
    return;
  },

  deleteReview: (id) => {
    // Reviews.remove({ _id: id })
    return;
  },
};

module.exports = modelsPsql;
