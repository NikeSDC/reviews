const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/reviews';
mongoose.connect(mongoURI)
  .then(() => {
    console.log('you are now connected to mongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const reviewSchema = mongoose.Schema({
  user_name: {
    type: String,
  },
  platform: String,
  rating: Number,
  title: Number,
  text: String,
  timestamp: String,
});

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;

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