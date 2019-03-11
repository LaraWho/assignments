import React from 'react';
import { withToggler } from './HOC/Toggler';

const NavBar = ({on, toggle}) => {
  const nav = {
    backgroundColor: "blue",
    height: "50px"
  }
    return (
      <div onClick={toggle} style={nav}>
        {!on ? <i className="fas fa-star"></i> : <i className="far fa-star"></i> }
      </div>
    );
  }

export default withToggler(NavBar);