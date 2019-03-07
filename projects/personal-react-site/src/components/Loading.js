import React, { Component } from 'react';
import { withState } from '../MyState';
import ReturnedColours from './ReturnedColours';

class Loading extends Component {
  render() {
   
  return (
    <div>

    {!this.props.loaded ? 

      <div className="upload-form loading">
      <h1>please wait a smidgen</h1></div>
    
      :
      
      <ReturnedColours />

      }
    </div>

  );
   
}
};

export default withState(Loading);