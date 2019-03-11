import React, { Component } from 'react';
import { withState } from '../MyState';

class ColorDetail extends Component {
  render() {
   
    let arrayToMap = [];
    // 'arrayToMap' will hold either an array taken from local storage to display your saved list of colours, or the array from state when you see the colours from your uploaded image
    
    this.props.toShow === "return" ?
    arrayToMap = this.props.scheme
      :
    arrayToMap = this.props.localSchemes
    
    let mappedColours = arrayToMap.map((color, i) => {
      // Applying a different class name if there are an odd number of colours, so I can apply a 100% width to the last element.
      if(arrayToMap.length % 2 === 0) {
        return <div key={color.label+i} style={{backgroundColor: color.color}} className="color-box">
                <p>{color.label}</p>
                <p>{color.color}</p>
              </div>
      } else {
        return <div key={color.label+i} style={{backgroundColor: color.color}} className="color-box two">
                <p>{color.label}</p>
                <p>{color.color}</p>
              </div>
      }
    })
    return (
      <div className="colors">
        {mappedColours} 
      </div>
    );
  }
}

export default withState(ColorDetail);