const Reviews = require('./');

const models = {
  getReviews: () => {
    return Reviews.find();
  },

  addReview: (review) => {
    return Reviews.create(review);
  },

  updateReview: (id, review) => {
    return Reviews.findOneAndUpdate({_id: id}, review)
  },

  deleteReview: (id) => {
    return Reviews.remove({_id: id})
  }
}

module.exports = models;

// user_name: {
//   type: String,
//   unique: true
// },
// location: String,
// rating: Number,
// review: String,
// {
//   timestamps: true
// }
// })