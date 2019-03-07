import React from 'react';
import { Link } from 'react-router-dom';
import { withState } from '../MyState';

const NavBar = (props) => {
  
  const { imgURL, scheme } = props
  return (

    <div className="nav">
      <Link to="/">home</Link>
       <h2 onClick={() => props.saveScheme(imgURL, scheme)}>save these colours</h2>
    </div>
  )
}

export default withState(NavBar);