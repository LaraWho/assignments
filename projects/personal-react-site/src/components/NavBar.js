import React, { Component } from 'react';
import { withState } from '../MyState';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  
  render() {
  return (
    <div className="nav">
      <Link to="/">home</Link>
    </div>
  );
}
};

export default withState(NavBar);