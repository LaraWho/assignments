import React, { Component } from 'react';
import { withState } from '../MyState';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SavedList extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     wat: []
  //   }
  // }

  // componentDidMount() {
  //   axios.get('/api/saved').then(res => {
  //     console.log(res.data)
  //     this.setState({
  //       wat: res.data
  //     })
  //   })
  // }
  
  render() {
    console.log(this.props.scheme)
    let mappedArray = this.props.scheme.map(el => {
      console.log(el)
    })
    // let mappedArray = this.props.scheme.map(el => {
    //   return el.map((el2, i) => {
    //     return <Link to={`/api/saved/${i}`} key={el2+i}><div ><img style={{height: '200px', cursor: "pointer"}} src={el2.imgURL} alt="" /></div></Link>
    //   })
    // })

    // onClick={() => this.props.seeColors(i)}
    return (
      <div>
        {mappedArray}
      </div>
    );
  }
}

export default withState(SavedList);