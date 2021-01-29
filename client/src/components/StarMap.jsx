import React from 'react';
import Stars from './Stars.jsx';

// this component will need to take in an array of review(s), examine the total number of reviews that are in the database, and iterate through each review, incrementally adding the review rating to a ratings container, then divide the total review rating by the total number of reviews.

// the average ratings will algorithmically determine the number of stars to populate

const StarMap = (props) => (

  (
    <div className={props.className ? props.className : ""} style={{ display: 'flex', flexDirection: 'rows', width: 'fit-content' }}>

      <div className="star1">
        <Stars
          fill={isNaN(props.ratings) ? "#e5e5e5" : "black"}
          color={isNaN(props.ratings) ? "#e5e5e5" : "black"}
        />
      </div>

      <div
        className="star1"
      >
        <Stars
          fill={props.ratings >= 2 ? "black" : props.ratings < 1.1 ? "#e5e5e5" : isNaN(props.ratings) ? "#e5e5e5" : "black"}
          color={props.ratings >= 2 ? "black" : "#e5e5e5"}
        />
      </div>

      <div
        className="star1"
      >
        <Stars
          fill={props.ratings >= 3 ? "black" : props.ratings < 2.1 ? "#e5e5e5" : isNaN(props.ratings) ? "#e5e5e5" : "black"}
          color={props.ratings >= 3 ? "black" : "#e5e5e5"}
        />
      </div>

      <div
        className="star1"
      >
        <Stars
          fill={props.ratings >= 4 ? "black" : props.ratings < 3.1 ? "#e5e5e5" : isNaN(props.ratings) ? "#e5e5e5" : "black"}
          color={props.ratings >= 4 ? "black" : "#e5e5e5"} />
      </div>

      <div
        className="star1"
      >
        <Stars
          fill={props.ratings === 5 ? "black" : props.ratings <= 4.1 ? "#e5e5e5" : isNaN(props.ratings) ? "#e5e5e5" : "black"}
          color={props.ratings >= 5 ? "black" : "#e5e5e5"}
        />
      </div>

    </div>
  )
);

export default StarMap;
