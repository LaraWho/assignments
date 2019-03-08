import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withState } from '../MyState';
import splat from '../assets/mini-splat.svg';

class NavBar extends Component {
 
  render() {
    // const { bgColor } = this.props
    // style={{backgroundColor: bgColor}}
  return (

    <div className="nav">
      <Link to="/">home</Link>
      <Link to="/api/random"><img src={splat} alt=""/></Link>
    </div>
    ) 
  }
}

export default withState(NavBar);