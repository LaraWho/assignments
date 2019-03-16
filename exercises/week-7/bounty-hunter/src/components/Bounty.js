import React, { Component } from 'react';
import axios from 'axios';

class Bounty extends Component {

  kill = (id) => {
    axios.delete(`/api/bounties/${id}`).then(res => {
      console.log(res.data)
    })
  }

  render() {
    const { firstName, lastName, type, living, price, image, _id } = this.props.bounty
    return (
      <div className="bounty-box">
        <h1>{firstName} {lastName}</h1>
        <h2>{type}</h2>
        <img src={image} alt={firstName}/>
        <h2>Bounty Amount: {price}</h2>
        <h2>Status: {living ? "Alive" : "Dead"}</h2>
        <button onClick={() => this.kill(_id)}>Killed</button>
      </div>
    );
  }
}

export default Bounty;