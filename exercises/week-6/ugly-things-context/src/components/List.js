import React, { Component } from 'react';
import BeautifulThing from './BeautifulThing';
import { withState } from '../shared/MyState';

class List extends Component {
  componentDidMount() {
    this.props.getBeauty()
  }

  render() {
    let mapped = this.props.beautifulThings.map((beauty) => {
      return <BeautifulThing key={beauty._id} beautifulThing={beauty}/>
    })

    return (
        <div className="whole-page">
          {mapped}
        </div>
    );
  }
}
export default withState(List);