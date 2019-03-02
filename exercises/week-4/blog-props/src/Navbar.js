import React from 'react';
import { withToggler } from './Toggler';

const Navbar = ({open, toggle}) => {
  console.log(open)
  return (
  // <div>
    <div className="navbar">
      <h2>Start Bootstrap</h2>
      <h3 onClick={toggle}>MENU</h3>
    {/* </div> */}
      <ul className={open ? "open" : "closed"}>
        <li>home</li>
        <li>about</li>
        <li>sample post</li>
        <li>contact</li>
      </ul>
    </div>
  )
}

export default withToggler(Navbar);