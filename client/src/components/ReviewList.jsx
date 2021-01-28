import React from 'react';
import ReviewInstance from './ReviewInstance.jsx';

const ReviewList = (props) => {

  return props.reviews.map(review => {
    return (
      <ReviewInstance reviews={review} key={review._id}/>
    )
  })


}

export default ReviewList;
