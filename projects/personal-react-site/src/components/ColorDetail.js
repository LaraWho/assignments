import React, { Component } from 'react';
import { withState } from '../MyState';

class ColorDetail extends Component {
  render() {
    
    let mappedColours = this.props.scheme.map((el, i) => {
      if(this.props.scheme.length % 2 === 0) {
        return <div key={el.label+i} style={{backgroundColor: el.color}}          className="color-box">
                <p>{el.label}</p>
                <p>{el.color}</p>
              </div>
      } else {
        return <div key={el.label+i} style={{backgroundColor: el.color}}          className="color-box two">
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