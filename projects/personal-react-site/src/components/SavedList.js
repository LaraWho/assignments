import React, { Component } from 'react';
import { withState } from '../MyState';
import { Link } from 'react-router-dom';

class SavedList extends Component {

  render() {
    let item = localStorage.schemes
    let array = JSON.parse(item)
    let mappedArray = array.map((image, i) => {
      console.log(image)
      return <Link to={`/api/saved/${image.id}`} key={image.imgURL+i}><img src={image.imgURL} alt=""/></Link>
    })
    // let mappedArray = this.props.scheme.map(el => {
    //   return el.map((el2, i) => {
    //     return <Link to={`/api/saved/${i}`} key={el2+i}><div ><img style={{height: '200px', cursor: "pointer"}} src={el2.imgURL} alt="" /></div></Link>
    //   })
    // })

    // onClick={() => this.props.seeColors(i)}
    return (
      <div className="saved-list">
        {mappedArray}
      </div>
    );
  }
}

export default withState(SavedList);