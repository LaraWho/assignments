import React, { Component } from 'react';
import { withState } from '../MyState';
import ColourDetail from './ColourDetail';

class ReturnedColours extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
   
    return (
      <div>
        <img src={this.props.imgURL} alt=""/>
        <ColourDetail />
      </div>
    );
  }
}

export default withState(ReturnedColours);