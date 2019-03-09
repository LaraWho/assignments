import React, { Component } from 'react';
import { withState } from '../MyState';

class ColorDetail extends Component {
  render() {
   
    let arrayToMap = [];
    
    this.props.toShow === "return" ?
    arrayToMap = this.props.scheme
      :
    arrayToMap = this.props.localSchemes
    
    let mappedColours = arrayToMap.map((el, i) => {
      if(arrayToMap.length % 2 === 0) {
        return <div key={el.label+i} style={{backgroundColor: el.color}} className="color-box">
                <p>{el.label}</p>
                <p>{el.color}</p>
              </div>
      } else {
        return <div key={el.label+i} style={{backgroundColor: el.color}} className="color-box two">
                <p>{el.label}</p>
                <p>{el.color}</p>
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