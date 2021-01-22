import React from 'react';
import Chevron from './Chevron.jsx';

class Shipping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(e) {
    this.setState({ active: !this.state.active });

    console.log(this.state.active)
  }



  render() {
    const buttonStyle = {
      "outline": "none",
      "borderRadius": "0px",
      "position": "relative",
      'display': 'flex',
    };
    const isClicked = this.state.active;
    let shipping;

    if (isClicked) {
      shipping = <div className="ncss-col-sm-12 pb8-sm prl1-sm" id="accordion-panel-1">
        <span className="exp-pdp-promo-message-text">
          Free standard shipping and free 60-day returns for Nike Members.
                    <u><a href="https://www.nike.com/help/a/free-shipping"> Learn more. </a></u><br></br>
          <u><a href="https://www.nike.com/help/a/return-exceptions">Return policy exclusions apply</a></u>
        </span><br></br>
        <u><a href="https://www.nike.com/help/a/store-pickup">Pick-up available at select Nike Stores.</a></u>
      </div>
    }
    return (
      <div>
        <div className="css-15oagn2">
          <button type="button" className="css-1y5ubft panel-controls" style={buttonStyle} onClick={this.toggleAccordion}>
            <div className="ncss-col-sm-10 css-17y0hnb">
              <h3 className="css-nofngn">Free Shipping &amp; Returns</h3>
            </div>
            <div className="ncss-col-sm-2 css-7eklhh">
              <span><Chevron /></span>
            </div>
          </button>
          <div>
            {shipping}
          </div>
        </div>
      </div>
    );
  }
}

export default Shipping;
