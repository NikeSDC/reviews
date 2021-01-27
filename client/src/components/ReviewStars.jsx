import React from 'react';
import Star from './Star.jsx';
// This component generates the stars in the Write a Review section of the Nike App.
class ReviewStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: null,
      clicked: false,
      selectedStar: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target.value;

    console.log('event: ', e.target);
    console.log('target: ', target);
    console.log('id: ', e.target.id);
    console.log('name: ', e.target.name);

    this.setState({
      hovered: target,
    });
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'rows', width: '3px' }}>
          <div
            onMouseEnter={() => this.setState({ hovered: 1 })}
            onMouseLeave={() => this.state.clicked ? this.setState({ hovered: this.state.selectedStar }) : this.setState({ hovered: 0 })}
            className={this.state.hovered >= 1 ? "starFill" : "starEmpty"}
            onClick={() => { this.setState({ clicked: true, hovered: 1, selectedStar: 1 }, this.props.setRating(1)) }}
          >
            <Star />
          </div>

          <div
            onMouseEnter={() => this.setState({ hovered: 2 })}
            onMouseLeave={() => this.state.clicked ? this.setState({ hovered: this.state.selectedStar }) : this.setState({ hovered: 0 })}
            className={this.state.hovered >= 2 ? "starFill" : "starEmpty"}
            onClick={() => { this.setState({ clicked: true, hovered: 2, selectedStar: 2 }, this.props.setRating(2)) }}
          >
            <Star />
          </div>

          <div
            onMouseEnter={() => this.setState({ hovered: 3 })}
            onMouseLeave={() => this.state.clicked ? this.setState({ hovered: this.state.selectedStar }) : this.setState({ hovered: 0 })}
            className={this.state.hovered >= 3 ? "starFill" : "starEmpty"}
            onClick={() => { this.setState({ clicked: true, hovered: 3, selectedStar: 3 }, this.props.setRating(3)) }}
          >
            <Star />
          </div>

          <div
            onMouseEnter={() => this.setState({ hovered: 4 })}
            onMouseLeave={() => this.state.clicked ? this.setState({ hovered: this.state.selectedStar }) : this.setState({ hovered: 0 })}
            className={this.state.hovered >= 4 ? "starFill" : "starEmpty"}
            onClick={() => { this.setState({ clicked: true, hovered: 4, selectedStar: 4 }, this.props.setRating(4)) }}
          >
            <Star />
          </div>

          <div
            onMouseEnter={() => this.setState({ hovered: 5 })}
            onMouseLeave={() => this.state.clicked ? this.setState({ hovered: this.state.selectedStar }) : this.setState({ hovered: 0 })}
            className={this.state.hovered >= 5 ? "starFill" : "starEmpty"}
            onClick={() => { this.setState({ clicked: true, hovered: 5, selectedStar: 5 }, this.props.setRating(5)) }}
          >
            <Star />
          </div>

        </div>
      </div>
    );
  }
}

export default ReviewStars;
