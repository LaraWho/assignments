import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withState } from '../MyState';
import splat from '../assets/mini-splat.svg';

class NavBar extends Component {
 
  render() {
    const { imgURL, scheme, bgColor } = this.props
    let randomNum = Math.floor(Math.random() * 600)
 
  return (

    <div className="nav" style={{backgroundColor: bgColor}}>
      <Link to="/">home</Link>
      <Link to="/api/random"><img src={splat} alt=""/></Link>
    </div>
  )
   
}
}

export default withState(NavBar);