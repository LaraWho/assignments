import React from 'react';
import { withToggler } from './HOC/Toggler';

const Home = ({on, toggle}) => {
  const yellow = {
    backgroundColor: "yellow",
    color: "white",
    height: "100px"
  }
  const red = {
    backgroundColor: "red",
    color: "blue",
    height: "100px"
  }

  return (
    <div onClick={toggle} style={on ? yellow : red}>
        <h1>home</h1>
    </div>
  );
};

export default withToggler(Home);