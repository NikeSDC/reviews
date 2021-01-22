import React from 'react';
import { IoStar } from 'react-icons/io5';
import { IoStarHalf } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';
import styled from 'styled-components';
import ReviewInstance from './ReviewInstance.jsx'
import ReviewsModal from './ReviewsModal.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      review: 3,
      hovered: false,
      modalClicked: false,
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.starRender = this.starRender.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      modalClicked: !this.state.modalClicked
    });
  }

  toggleAccordion() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  starRender() {
    if (this.state.review === 3) {
      return (
        <span className="ncss-col-sm-5 css-7eklhh">
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
    }
  }


  starRender2() {
    if (this.state.review === 3) {
      return (
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
    }
  }

  // reviewRender() {
  //   if (this.state.isClicked) {

  //   }
  // }

  render() {
    const buttonStyle = {
      "outline": "none",
      "borderRadius": "0px",
      "position": "relative",
      'display': 'flex',
    };
    const starWidth = { "width": 59 }; //should be in percentage

    const ReviewsContainer1 = styled.div`
      padding-top: 20px;
      `;

    const ReviewsContainer2 = styled.div`
      margin-bottom: 20px;
      `;

    const ProductReview = styled.div`
      margin-bottom: 40px;
      `;

    const StarRating = styled.p`
      padding-left: 16px;
      display: inline-block;
    `;

    //   outline: 0;
    //   padding: 0px;
    // border-radius: unset;
    // background: #fff;
    // color: #111;
    // display: inline-block;
    // vertical-align: top;
    // white-space: nowrap;
    // text-align: center;
    // text-decoration: none;
    // font-weight: 500;
    // font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    // font-size: 16px;
    // line-height: 1.5;
    // cursor: pointer;
    // transition: all .2s ease;

    const MoreReviews = styled.button`
    background: #fff;
    white-space: nowrap;
    display: inline-block;
    text-align: center;
    color: #111;
    box-sizing: border-box;
    margin: inherit;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    cursor: pointer;
    padding-bottom: 4px;
    border-bottom: 1px solid black;
    border-radius: unset;
    `;

    const WriteReviewButton = styled.button`
    background: #fff;
    color: #111;
    box-shadow: inset 0 -1px 0 0 #111;
    padding-bottom: 2px;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
    opacity: ${() => { this.state.hovered === true ? '1' : 'none' }}
    outline-color: ${() => { this.state.hovered === true ? 'initial' : 'none' }}
    outline-style: ${() => { this.state.hovered === true ? 'initial' : 'none' }}
    outline-width: ${() => { this.state.hovered === true ? '0px' : 'none' }}
    color: ${() => { this.state.hovered === true ? 'red' : 'black' }}
    `;

    // const OnHover = {
    //   'outline-color': 'initial',
    //   'outline-style': 'initial',
    //   'outline-width': '0px',
    // };

    const { isClicked } = this.state;
    let reviews;

    if (isClicked) {
      reviews = (
        <ReviewsContainer1>
          <ReviewsContainer2>
            <ProductReview>
              <div style={{ display: 'inline-block' }}>
                <span className='body-1'>
                  {this.starRender2()}
                </span>
                <StarRating>
                  4.6 Stars
            </StarRating>
              </div>
              <p className='pt2-sm d-lg-b'>
                <WriteReviewButton onMouseEnter={() => { this.setState({ hovered: true }) }} onMouseLeave={() => { this.setState({ hovered: false }) }}>
                  Write a Review
              </WriteReviewButton>
              </p>
              <ReviewInstance />
              <MoreReviews onClick={this.handleClick}>More Reviews</MoreReviews>
              {this.state.modalClicked === true ? <ReviewsModal handleClick={this.handleClick} /> : ''}
            </ProductReview>
          </ReviewsContainer2>
        </ReviewsContainer1>
      )
    }

    return (
      <div className="css-15oagn2">
        <button aria-haspopup="true" aria-controls="accordion-panel-3" aria-hidden="true" type="button" className="css-1y5ubft panel-controls" style={buttonStyle} onClick={this.toggleAccordion}>
          <div className="ncss-col-sm-7 css-17y0hnb">
            <h3 className="css-nofngn">Reviews (41)</h3>
          </div>
          <div className="ncss-col-sm-5 css-7eklhh">
            <span className="text-color-primary-dark css-1fpb7q0">
              {this.starRender()}
            </span>
            <span data-test="qa-arrow" className="css-10t76nn"></span>
          </div>
        </button>
        {reviews}
      </div>
    );
  }
}

export default Reviews;
