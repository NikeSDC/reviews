import React from 'react';
import { IoStar } from 'react-icons/io5';
import { IoStarHalf } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';

const StarRenderer = () => (
  <span className="ncss-col-sm-5 ">
    <span className="mr1-sm d-sm-ib">
      <i className="g72"><IoStar /></i>
    </span>
    <span className="mr1-sm d-sm-ib">
      <i className="g72"><IoStar /></i>
    </span>
    <span className="mr1-sm d-sm-ib">
      <i className="g72"><IoStar /></i>
    </span>
    <span className="mr1-sm d-sm-ib">
      <i className="g72"><IoStar /></i>
    </span>
    <span className="mr1-sm d-sm-ib">
      <i className="g72"><IoStarHalf /></i>
    </span>
  </span>
);

export default StarRenderer;
