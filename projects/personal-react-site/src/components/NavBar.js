import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withState } from '../MyState';

class NavBar extends Component {

  render() {
  return (

    <div className="nav">
      <Link to="/">home</Link>

      <Link to="/api/saved"
      style={this.props.inSaved ? {display: "none"} : null}>see saved</Link>
    
      <h2 onClick={this.props.saveScheme}
      style={this.props.inSaved ? {display: "none"} : null}>save</h2>

    </div>
    ) 
  }
}

export default withState(NavBar);