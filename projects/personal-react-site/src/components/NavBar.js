import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withState } from '../MyState';
import splat from '../assets/mini-splat.svg';

class NavBar extends Component {

  render() {
  return (

    <div className="nav">
      <Link to="/">home</Link>

      <Link to="/api/saved"
      style={this.props.inSaved === "none" ? {display: "none"} : null}>see saved</Link>
    
      <h2 onClick={this.props.saveScheme}
      style={this.props.inSaved === "none" ? {display: "none"} : null}>save</h2>

      <Link to="/api/random"><img src={splat} alt=""/></Link>
    </div>
    ) 
  }
}

export default withState(NavBar);