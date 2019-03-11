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
        {/* ColorDetail displays the colours. It's being used in two components and am mapping over different arrays in both. Here I'm passing a prop to this instance so I can use it to conditionally render information */}
        <ColorDetail toShow="return"/>
        <NavBar />
      </div>

    );
  }
}

export default withState(ReturnedColours);