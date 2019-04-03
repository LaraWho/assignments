import React, { Component } from 'react';
import { withState } from '../MyState';
import Form from './Form';

class Bounty extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      price: 0,
      type: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveBounty(this.props.bounty._id, this.state)
  }

  render() {
    const { firstName, lastName, type, living, price, image, _id } = this.props.bounty

    return (
      <div className="bounty-box">
        {this.props.canEdit ?
        
        <Form type="edit" bounty={this.props.bounty}/>

        :

        <div>
          <h1>{firstName} {lastName}</h1>
          <h2>{type}</h2>
          <img src={image} alt={firstName}/>
          <h2>Bounty Amount: {price}</h2>
          <h2>Status: {living ? "Alive" : "Dead"}</h2>
          <button onClick={() => this.props.killBounty(_id)}>Killed</button>
          <button onClick={() => this.props.editBounty(_id)}>edit</button>
        </div>
        
        }

      </div>
      
    );
  }
}

export default withState(Bounty);