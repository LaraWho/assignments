import React, { Component } from 'react';
import { withState } from '../MyState';

class NavBar extends Component {


  render() {
  return (
    <div>
      {/* onclick see collection */}
      <button onClick={this.props.seeCollection}>fnjf</button>
    </div>
  );
}
};

export default withState(NavBar);