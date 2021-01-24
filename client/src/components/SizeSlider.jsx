import React from 'react';
import styled from 'styled-components';
import Slider from './Slider.jsx';

const SizeSlider = (props) => {

  const TotalSize = styled.div`
    width: 100%;
    display: block;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

  const TotalComfort = styled.div`
    width: 100%;
    display: block;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

  const TotalDurability = styled.div`
    width: 100%;
    display: block;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

  return (
    <div>
      <TotalSize name="Size">
        <div style={{ fontWeight: 'normal', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '14px', marginTop: '4px', display: 'flex' }}>Size</div>
        <div>{Slider()}</div>
        <div>
          <div style={{ display: 'flex', textAlign: 'left', fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs small</div>
          <div style={{ textAlign: 'right', position: 'relative', bottom: 12, fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs Big</div>
        </div>
      </TotalSize>
      {/* <TotalComfort name="Comfort">
        <div style={{ fontWeight: 'normal', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '14px', marginTop: '4px', display: 'flex' }}>Comfort</div>
        <div>{Slider()}</div>
        <div>
          <div style={{ display: 'flex', textAlign: 'left', fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs small</div>
          <div style={{ textAlign: 'right', position: 'relative', bottom: 12, fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs Big</div>
        </div>
      </TotalComfort>
      <TotalDurability name="Durability">
        <div style={{ fontWeight: 'normal', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '14px', marginTop: '4px', display: 'flex' }}>Durability</div>
        <div>{Slider()}</div>
        <div>
          <div style={{ display: 'flex', textAlign: 'left', fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs small</div>
          <div style={{ textAlign: 'right', position: 'relative', bottom: 12, fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs Big</div>
        </div>
      </TotalDurability> */}
    </div>
  );
};

export default SizeSlider;
