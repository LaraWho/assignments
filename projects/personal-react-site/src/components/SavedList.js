import React, { Component } from 'react';
import { withState } from '../MyState';

class SavedList extends Component {
  
  render() {
    console.log(this.props.savedSchemes)
    let mappedArray = this.props.savedSchemes.map(el => {
      return el.map((el2, i) => {
        return <div key={el2+i}><img style={{height: '200px', cursor: "pointer"}} src={el2.imgURL} alt="" onClick={() => this.props.seeColors(i)}/></div>
      })
    })
    return (
      <div>
        {mappedArray}
      </div>
    );
  }
}

export default withState(SavedList);