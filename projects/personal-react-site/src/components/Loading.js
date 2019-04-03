import React, { Component } from 'react';
import { withState } from '../MyState';
import ReturnedColours from './ReturnedColours';
import './loading.css';

class Loading extends Component {
  render() {
  
  return (
    <div>

    {!this.props.loaded ? 

      <div className="upload-form loading">
        <h1>
          <span>p</span>
          <span>l</span>
          <span>e</span>
          <span>a</span>
          <span>s</span>
          <span>e</span>
            <br/>
          <span>w</span>
          <span>a</span>
          <span>i</span>
          <span>t</span>
            <br/>
          <span>a</span>
            <br/>
          <span>s</span>
          <span>m</span>
          <span>i</span>
          <span>d</span>
          <span>g</span>
          <span>e</span>
          <span>n</span> 
        </h1>
      </div>
    
      :
      
      <ReturnedColours />

      }
    </div>

  );
  
}
};

export default withState(Loading);