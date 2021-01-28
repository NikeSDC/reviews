import React from 'react';

const Slider = (value) => (
  // this will eventually be fed by props

  <div>
    <input className="slider" type="range" min="1" max="100" value={value} width="80%" onChange={()=>{}} />
  </div>
);

export default Slider;
