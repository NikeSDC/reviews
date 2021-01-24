import React from 'react';
import { IoStar } from 'react-icons/io5';
import { IoStarHalf } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';
import styled from 'styled-components';
import ReviewInstance from './ReviewInstance.jsx'
import ReviewsModal from './ReviewsModal.jsx';
import { AiOutlineClose } from 'react-icons/ai';
import Star from './Star.jsx';
import Countries from './Countries.jsx';
import States from './States.jsx';

class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      runsSmall: 0,
      justRight: 0,
      runsBig: 0,
      uncomfortable: 0,
      sizeAverage: 0,
      veryComfortable: 0,
      notDurable: 0,
      durableAverage: 0,
      veryDurable: 0,
      username: "",
      reviewTitle: "",
      review: "",
      country: "",
      city: "",
      state: "",
      playArea: "",
      offenseStyle: "",
      defenseStyle: "",

    };
    this.renderStars = this.renderStars.bind(this);
  }

  handleClick(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  renderStars() {
    return(
      <span className="starEmpty">
        <Star />
      </span>
    )

    // return (
    //   <span className="ncss-col-sm-5 ">
    //     <span className="mr1-sm">
    //       <i><IoStarOutline style={{color: 'red', fill: 'black'}}/></i>
    //     </span>
    //     <span className="mr1-sm">
    //       <i><IoStarOutline /></i>
    //     </span>
    //     <span className="mr1-sm">
    //       <i><IoStarOutline /></i>
    //     </span>
    //     <span className="mr1-sm">
    //       <i><IoStarOutline /></i>
    //     </span>
    //     <span className="mr1-sm">
    //       <i><IoStarOutline /></i>
    //     </span>
    //   </span>
    // )
  }


  render() {
    // might want to change the position to absolute later!!
    const Modal = styled.div`
    overflow: auto;
    visibility: visible;
    display: block;
    z-index: 120002;
    outline-style: none;
    outline-width: 0px;
    top: 20px;
    position: fixed;
    background: #FFF;
    box-shadow: 0 4px 10px rgba(0,0,0,0.26);
    width: 60% !important;
    height: 90% !important;
    left: 20% !important;
    font-family: 'Helvetica Neue',Helvetica,Verdana,Arial,Helvetica,sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #58595b;
    line-height: 1.2;
    `;

    const Header = styled.div`
    background: none;
    padding: 10px;
    position: relative;
    color: #000;
    height: 21px;
    box-sizing: content-box;
    `;
    const Outline1 = styled.div`
    height: auto;
    min-height: 93px;
    width: auto;
    max-height: 495px;
    min-width: 90% !important;
    left: 0;
    margin: 0;
    padding: 0 !important;
    background: none;
    `;
    const Outline2 = styled.div`
    margin: 0;
    padding: 0 24px;
    max-height: 495px;
    display: flex;
    flex direction: column;
    flex-wrap: wrap;
    `;

    const WriteRevHeader = styled.div`
    width: 100%;
    margin-top: 26px;
    text-align: center;
    padding-bottom: 6px;
    `;
    const OverallRating = styled.div`
    border-bottom: 1px solid #F1F1F1;
    padding-bottom: 44px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    `;
    //fix the width!! fix the height so that the border appears!!
    const Radio = styled.div`
    border-bottom: 1px solid #F1F1F1;
    flex-basis: 33.33%;
    padding-bottom: 26px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    `;

    const AttributeContainer = styled.div`
    display: block;
    width: 100%;
    margin-bottom: 18px;
    font-size: 14px;
    font-weight: normal;
    color: #111;
    float: left;
    `;

    const RadioButtons = styled.div`
    float: left;
    width: auto;
    color: #8D8D8D;
    margin-bottom: 18px;
    padding: 0;
    `;

    const ReviewInput = styled.div`
    margin-bottom: 24px;
    flex-basis: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    `;
    const Title = styled.div`
    width: 33.33%;
    font-size: 14px;
    font-weight: normal;
    color: #111;
    float: left;
    `;
    const TextBox = styled.input`
    min-height: 43px;
    padding: 18px;
    width: 100%;
    font-size: 13px;
    line-height: 23px;
    resize: vertical;
    background: #FFF;
    font-family: 'Helvetica Neue',Helvetica,Verdana,Arial,Helvetica,sans-serif;
    border: 1px solid #e6e7e8;
    margin-bottom: 2px;
    border-radius: 2px !important;
    color: #black;
    type: text;
    `;

    return (
      <Modal>
        <div className="addReviewModal">
          <Header name="Header">
            <button type="button" onClick={this.props.moreReviewRender} style={{ outline: 0, position: 'absolute', top: '12px', right: '12px', paddingTop: '16px', zIndex: 10, background: '#fff' }}>
              <AiOutlineClose size={17} color={'#58595b'} fontWeight={'bold'} onClick={this.props.handleClick} />
            </button>
          </Header>
          <Outline1 name="Outline1">
            <Outline2 name="Outline2">
              <WriteRevHeader name="WriteRevHeader">
                <div name="WriteAReview" style={{ display: 'block' }}>
                  <div className="writeReview">
                    WRITE A REVIEW
                    <p style={{ marginBottom: '8px', fontFamily: 'Helvetica Neue', fontSize: '14px', color: '#8D8D8D', letterSpacing: 'normal', marginBlockStart: '0em', fontWeight: 400 }}>Please share your experience</p>
                  </div>
                </div>
                <OverallRating name="Overall rating">
                  <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <div style={{ fontSize: '14px', width: '33.33%', color: '#111', fontWeight: 'normal', textAlign: 'left' }}>
                      Overall rating:
                    <span style={{ color: 'red' }}> &nbsp; *</span>
                    </div>
                    {this.renderStars()}
                  </div>
                </OverallRating>
              </WriteRevHeader>
              <div name="RadioSection" className="RadioSection">
                <Radio name="Radio">
                  <AttributeContainer name="AttributeContainer">Size:</AttributeContainer>
                  <RadioButtons onClick={(e) => {console.log(e.target.id, e.target.value)}}>
                    <span className="radioButton" name="randomTest" >
                      <input type="radio" name="size" value="1" id="runsSmall"/>
                    &nbsp; Runs Small
                  </span>
                  </RadioButtons>
                  <RadioButtons onClick={(e) => {console.log(e.target.id, e.target.value)}}>
                    <span className="radioButton">
                      <input type="radio" name="size" value="1" />
                    &nbsp; Just Right
                  </span>
                  </RadioButtons>
                  <RadioButtons>
                    <span className="radioButton">
                      <input type="radio" name="size" value="1" />
                    &nbsp; Runs Big
                  </span>
                  </RadioButtons>
                </Radio>
                <Radio name="Radio">
                  <AttributeContainer name="AttributeContainerComfort">Comfort:</AttributeContainer>
                  <RadioButtons>
                    <span className="radioButton">
                      <input type="radio" name="comfort" value="1" />
                    &nbsp; Uncomfortable
                  </span>
                  </RadioButtons>
                  <RadioButtons>
                    <span className="radioButton">
                      <input type="radio" name="comfort" value="1" />
                    &nbsp; Average
                  </span>
                  </RadioButtons>
                  <RadioButtons>
                    <span className="radioButton">
                      <input type="radio" name="comfort" value="1" />
                    &nbsp; Very Comfortable
                  </span>
                  </RadioButtons>
                </Radio>
                <Radio name="Radio">
                  <AttributeContainer name="AttributeContainerDurability">Durability:</AttributeContainer>
                  <RadioButtons>
                    <span className="radioButton">
                      <input type="radio" name="durability" value="1" />
                    &nbsp; Not Durable
                  </span>
                  </RadioButtons>
                  <RadioButtons>
                    <span className="radioButton">
                      <input type="radio" name="durability" value="1" />
                    &nbsp; Average
                  </span>
                  </RadioButtons>
                  <RadioButtons>
                    <span className="radioButton">
                      <input type="radio" name="durability" value="1" />
                    &nbsp; Very Durable
                  </span>
                  </RadioButtons>
                </Radio>
              </div>
              <div className="reviewInput">
                <ReviewInput>
                  <Title>Username:</Title>
                  <div className="reviewTextField">
                    <TextBox placeholder="Headline or summary for your review" name="username">
                    </TextBox>
                  </div>
                </ReviewInput>
                <ReviewInput>
                  <Title>Review Title:</Title>
                  <div className="reviewTextField">
                    <TextBox name="title" placeholder="Headline or summary for your review">
                    </TextBox>
                  </div>
                </ReviewInput>
                <ReviewInput>
                  <Title>Review<span style={{ color: 'red' }}>*</span></Title>
                  <div className="reviewTextField" >
                    <TextBox name="review" style={{ height: '112px', minHeight: '112px', resize: 'vertical' }} placeholder="Write your review here. It must be at least 5 characters long. Consider whether you would recommend this product and what you like or dislike about it.">
                    </TextBox>
                  </div>
                </ReviewInput>
              </div>
              <div className="reviewInput" style={{ borderBottom: 'none' }}>
                <ReviewInput>
                  <Title>Country/Region:</Title>
                  <div className="reviewTextField" name="country">
                    {Countries()}
                  </div>
                </ReviewInput>
                <ReviewInput>
                  <Title>City:</Title>
                  <div className="reviewTextField">
                  <TextBox placeholder="Enter your city" name="city">
                    </TextBox>
                  </div>
                </ReviewInput>
                <ReviewInput>
                  <Title>State:</Title>
                  <div className="reviewTextField" name="state">
                    {States()}
                  </div>
                </ReviewInput>
                <ReviewInput>
                  <Title>I play on:</Title>
                  <div className="reviewTextField">
                    <select className="reviewsDropdowns" name="playArea">
                      <option> </option>
                      <option>Indoor Court</option>
                      <option>Outdoor Court</option>
                      <option>I use these casually</option>
                    </select>
                  </div>
                </ReviewInput>
                <ReviewInput>
                  <Title>My offense style:</Title>
                  <div className="reviewTextField" name="offenseStyle">
                    <select className="reviewsDropdowns">
                      <option> </option>
                      <option>Create Off The Dribble</option>
                      <option>Drive The Lane</option>
                      <option>Catch And Shoot</option>
                      <option>Post Up And Fade Away</option>
                      <option>Run The Offense</option>
                    </select>
                  </div>
                </ReviewInput>
                <ReviewInput>
                  <Title>My defense style:</Title>
                  <div className="reviewTextField" name="defenseStyle">
                    <select className="reviewsDropdowns">
                      <option> </option>
                      <option>Lock Down The Scorer</option>
                      <option>Defend the Perimeter</option>
                      <option>Guard The Ball Handler</option>
                      <option>Play The Passing Lanes</option>
                      <option>Crash The Glass</option>
                    </select>
                  </div>
                </ReviewInput>
              </div>
              <div style={{textAlign: 'center', fontSize: '11px', color: '#8D8D8D'}}>
                I understand my rating and review may appear publicly as a Nike Verified Purchase and data I provide may appear with my public review. By clicking Submit, I agree to <u><b>Privacy Policy</b></u>, <u><b>Terms of Use</b></u>, and <u><b>Terms of Service</b></u>.
              </div>
              <button className="submitReview" value="Submit">SUBMIT</button>
              <ReviewInput> &nbsp; </ReviewInput>
              <ReviewInput> &nbsp; </ReviewInput>
            </Outline2>
          </Outline1>
        </div>
      </Modal>
    );
  }
}

export default AddReview;
