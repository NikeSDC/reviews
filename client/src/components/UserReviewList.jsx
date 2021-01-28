import React from 'react';
import UserReview from './UserReview.jsx';

const UserReviewList = (props) => (
  props.reviews.map((review) => (
    <UserReview reviews={review} key={review._id} />
  ))

);

export default UserReviewList;
