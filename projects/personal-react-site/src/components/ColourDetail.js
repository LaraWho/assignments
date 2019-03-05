import React, { Component } from 'react';
import { withState } from '../MyState';

class ColourDetail extends Component {
  render() {
    console.log(this.props.scheme)
    let mappedColours = this.props.scheme.map((el, i) => {
      console.log(el)
      return <div key={el.label+i} style={{backgroundColor: el.color, height: '200px', width: '200px'}}></div>
    })
    return (
      <div className="colours">
        {mappedColours}        
      </div>
    );
  }
}

export default withState(ColourDetail);