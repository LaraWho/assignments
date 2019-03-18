import React, { Component } from 'react';
import './reset.css';
import './styles.css';
import Bounty from './components/Bounty';
import Form from './components/Form';
import { withState } from './MyState';

class App extends Component {

  componentDidMount() {
    this.props.getBounties()
  }

  render() {
    let mappedBounties = this.props.bounties.map(bounty => (
      <Bounty key={bounty._id} bounty={bounty} />
    ))
    return (
      <div>
        <Form />
        <div className="all-bounties">
          {mappedBounties}
        </div>
      </div>
    );
  }
}

export default withState(App);
