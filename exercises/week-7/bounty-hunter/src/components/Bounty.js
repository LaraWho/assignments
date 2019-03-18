import React, { Component } from 'react';
import { withState } from '../MyState';

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

  editField = () => {

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editBounty(this.state)
  }

  render() {
    const { firstName, lastName, type, living, price, image, _id } = this.props.bounty
    return (
      <div className="bounty-box">
        {this.props.canEdit ?
        
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" value={firstName} onChange={this.handleChange} required/>
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange} required/>
          <img src={image} alt={firstName}/>
          <input type="text" name="price" value={price} onChange={this.handleChange}/>
          <input type="text" name="type" value={type} onChange={this.handleChange}/>
          <button>save</button>
        </form>

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