import React, { Component } from 'react';
import { withState } from '../MyState';
import ColorDetail from './ColorDetail';

class ReturnedColours extends Component {
 
  render() {
   const { imgURL, scheme } = this.props
    return (
      <div className="returned-list">
        <button onClick={() => this.props.saveScheme(imgURL, scheme)}>save</button>
        <img src={imgURL} alt=""/>
        <ColorDetail />
      </div>
    );
  }
}

export default withState(ReturnedColours);