import React from 'react';
import styled from 'styled-components';
import StarRenderer from './StarRenderer.jsx'
import SizeSlider from './SizeSlider.jsx'
import ComfortSlider from './ComfortSlider.jsx'
import DurabilitySlider from './DurabilitySlider.jsx'
import { BsShift } from 'react-icons/bs';
import { BsShiftFill } from 'react-icons/bs';
import { RiFlag2Line } from 'react-icons/ri';

class UserReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ReviewContainer = styled.div`
    background: transparent;
    border-bottom: 1px solid #E5E5E5;
    border-top: none;
    padding-top: 60px;
    padding-bottom: 60px;
    height: fit-content;
    margin-left: 1%;
    margin-right: 1%;
    width: 100%;
    display: flex;
    flex-direction: row;
    `;
    const ReviewContainerA = styled.div`
    width: 30%;
    float: left;
    padding-right: 60px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    `;
    const StarDiv = styled.div`
    border: 0;
    padding: 0;
    background-color: #fff;
    width: 88px;
    margin-bottom: 18px;
    `;
    const Attributes = styled.div`
    border: 0;
    padding: 0;
    background-color: #fff;
    width: 100%;
    margin-bottom: 18px;
    `;
    // Styling for 2nd column begins here:
    const ReviewContainerB = styled.div`
    width: 70%;
    float: right;
    margin-left: 0;
    background: #FFF;
    display: flex;
    flex-direction: column;
    `;
    const Title = styled.div`
    font-size: 14px;
    line-height: 1.6;
    color: #111;
    text-transform: capitalize;
    font-weight: bold;
    `;
    const Comment = styled.div`
    font-size: 14px;
    line-height: 1.7;
    color: #111;
    margin-bottom: 0;
    margin-top: 5px;
    word-wrap: break-word;
    `;
    const Details = styled.div`
    width: 70%;
    margin-left: 0;
    text-align: left;
    line-height: 1.8;
    margin-bottom: 1rem;
    color: #6D6D6D;
    font-size: 12px;
    padding-top: 50px;
    `;
    const Upvote = styled.div`
    font-weight: normal;
    color: #6D6D6D;
    font-size: 12px;
    margin-left: 0px;
    background: #FFF;
    display: flex;
    flex-direction: row;
    `;

    return (
      <ReviewContainer>
        <ReviewContainerA>
          <StarDiv>
            {StarRenderer()}
          </StarDiv>
          <Attributes>
            {SizeSlider()}
          </Attributes>
          <Attributes>
            {ComfortSlider()}
          </Attributes>
          <Attributes>
            {DurabilitySlider()}
          </Attributes>
        </ReviewContainerA>
        <ReviewContainerB>
          <div>
            <Title>These Shoes are great for kicking butt!!</Title>
            <Comment>
              I basically just like to kick people in the butt from time to time. I find that these shoes give me the appropriate amount of leverage to angle my feet with the perfect precision to be able to rupture peoples' buttholes. Thanks Nike!!
          </Comment>
          </div>
          <div>
            <Details>
              <div name="address" style={{ display: 'flex', flexDirection: 'row' }}>
                <div>January 22, 2021 &nbsp; </div>
                <div style={{ fontWeight: 'bold' }}> -- username -- &nbsp;  </div>
                <div> Los Angeles, &nbsp; &nbsp;  </div>
                <div> CA US </div>
              </div>
              <div name="Verified" style={{ color: '#FA5400' }}> Verified Purchaser</div>
              <div name="PlayStyle" style={{ display: 'flex', flexDirection: 'row' }}>
                <div name="playstyle">I play on: </div>
                <div name="offense">My offense style: </div>
                <div name="defense">My defense style: </div>
              </div>
            </Details>
          </div>
          <div>
            <Upvote>
              <div>
              <button onMouseOver={() => { <BsShiftFill /> }}>
                <BsShift style={{backgroundColor: 'rgba(0,0,0,.5)', background: '#FFF'}}/>
                </button>
                &nbsp;
                0
                </div>
                <div>
              <button type="button"  onMouseOver={() => { BsShiftFill }} style={{ transform: 'rotate(180deg' }}>
                <BsShift />
                </button>
                &nbsp;
                0
              </div>
              <div>
              <button type="button">
                <RiFlag2Line />
              </button>
              </div>
            </Upvote>
          </div>
        </ReviewContainerB>
      </ReviewContainer>
    );
  }
}

export default UserReview;
