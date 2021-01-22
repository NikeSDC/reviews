import React from 'react';
import styled from 'styled-components';
import StarRenderer from './StarRenderer.jsx';

class ReviewInstance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const ReviewContainer1 = styled.div`
      margin-bottom: 40px;
  `;
    const ReviewContainer2 = styled.div`
    padding-left: 16px;
    display: inline-block;
  `;
    const Title = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  `;
    const Stars = styled.div`
    display: inline-block;
  `;
    const Date = styled.p`
    color: #757575;
    padding-left: 16px;
    display: inline-block;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 400;
  `;
    const Space = styled.p`
    padding-bottom: 8px;
    line-height: 1.5
  `;
    const Comments = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    display: block;
  `;

    return (
      <ReviewContainer1>
        <ReviewContainer2>
          <Title>
            <Stars>
              {StarRenderer()}
            </Stars>
            <Date>
              Vini B - Jan 21, 2021
            </Date>
            <Space />
            <Comments>This is a test to see if this is going to work</Comments>
          </Title>
        </ReviewContainer2>
      </ReviewContainer1>
    );
  }
}

export default ReviewInstance;
