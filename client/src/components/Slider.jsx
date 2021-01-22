import React from 'react';

const Slider = () => (
  // this will eventually be fed by props

  <div>
    <input className="slider" type="range" min="1" max="100" value="70" width="80%" />
  </div>
);

export default Slider;
