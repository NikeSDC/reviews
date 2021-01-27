import React from 'react';
import UserReview from './UserReview.jsx';

const UserReviewList = (props) => {

  return props.reviews.map(review => {
    return (
      <UserReview reviews={review} key={review._id} />
    )
  })

}

export default UserReviewList;
