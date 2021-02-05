const pool = require('./indexPsql.js');

const modelsPsql = {
  getReviews: () => (
    pool.query('select * from reviews limit 10')
  ),

  getRecent: () => (
      // Reviews.find().sort({ _id: -1 }).limit(3)
    pool.query('select * from reviews limit 10')
  ),

  getUser: (id) => (
    // Reviews.find({ _id: id })
    pool.query(`select * from reviews where id= ${id} limit 10`)
  ),

  getRecent10: () => (
    // Reviews.find().sort({ _id: -1 }).limit(10)
    pool.query('select * from reviews limit 10')
  ),

  getHelpful10: () => (
    // Reviews.find().sort({ upvote: -1 }).limit(10)
    pool.query('select * from reviews limit 10')
  ),

  getHighest10: () => (
    // Reviews.find().sort({ overallRating: -1 }).limit(10)
    pool.query('select * from reviews limit 10')
  ),

  getLowest10: () => (
    // Reviews.find().sort({ overallRating: +1 }).limit(10)
    pool.query('select * from reviews limit 10;')
  ),

  addReview: (review) => (
    // Reviews.create(review)
    pool.query(`insert into reviews (
      username,
      country,
      city,
      comfort,
      durability,
      offenseStyle,
      defenseStyle,
      overallRating,
      playArea,
      review,
      reviewTitle,
      size,
      state,
      upvote,
      downvote)
    values (
      ${review.username}
      ${review.country}
      ${review.city}
      ${review.comfort}
      ${review.durability}
      ${review.offenseStyle}
      ${review.defenseStyle}
      ${review.overallRating}
      ${review.playArea}
      ${review.review}
      ${review.reviewTitle}
      ${review.size}
      ${review.state}
      ${review.upvote}
      ${review.downvote}
    )`)
  ),

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
