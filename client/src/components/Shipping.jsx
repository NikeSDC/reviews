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
  }

  render() {
    const isClicked = this.state.active;
    let shipping;

    if (isClicked) {
      shipping = <div className="ncss-col-sm-12 pb8-sm prl1-sm" id="accordion-panel-1">
        <span>
          Free standard shipping and free 60-day returns for Nike Members. &nbsp;
                    <a href="https://www.nike.com/help/a/free-shipping" id="shippingHyperlink">Learn more. </a><br></br>
          <a href="https://www.nike.com/help/a/return-exceptions" id="shippingHyperlink">Return policy exclusions apply</a>
        </span><br></br>
        <a href="https://www.nike.com/help/a/store-pickup" id="shippingHyperlink">Pick-up available at select Nike Stores.</a>
      </div>
    }
    return (
      <div>
        <div className="css-15oagn2">
          <div className="css-1y5ubft" onClick={this.toggleAccordion}>
            <div className="accordionCont1" style={{width: "85%"}} >

              <h3 className="accordionTitle">Free Shipping &amp; Returns</h3>
            </div>
            <div className="accordionCont3" style={{ width: "15%" }}>
              <span><Chevron className="reviewDropdown" /></span>
            </div>
          </div>
          <div>
            {shipping}
          </div>
        </div>
      </div>
    );
  }
}

export default Shipping;
