import React, { Component } from 'react';
import { withState } from '../MyState';
import ColorDetail from './ColorDetail';
import NavBar from './NavBar';

class ReturnedColours extends Component {
  
  render() {
   const { imgURL, scheme } = this.props
    return (
     
      <div className="returned-list" style={{backgroundColor: scheme[1].color}}>
        <img src={imgURL} alt=""/>
        <ColorDetail toShow="return"/>
        <NavBar />
      </div>

    );
  }
}

export default withState(ReturnedColours);