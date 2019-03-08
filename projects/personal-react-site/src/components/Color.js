import React, { Component } from 'react';
import { withState } from '../MyState';

class Color extends Component {

  componentDidMount() {
    this.props.randomise()
  }

  render() {
    console.log(this.props.bgColors)
  
    return (
      <div className="colors">
      <div className="color-box" style={{backgroundColor: this.props.bgColors}}></div>
      
    </div>
    );
  }
}

export default withState(Color);