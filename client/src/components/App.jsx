import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
import Shipping from './Shipping.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: 3,
    };
  }

  render() {
    return (
      <div>
        <div className="startingPage pt10-lg mt0-lg mr0-lg ml0-lg">
          <Shipping />
          <Reviews />
        </div>
      </div>
    );
  }
}

export default App;
