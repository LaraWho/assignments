import React, { Component } from 'react';
import { withState } from '../MyState';

class Form extends Component {
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
    this.props.addBounty(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      price: 0,
      type: ''
    })
  }

  render() {
    const { firstName, lastName, price, type } = this.state
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" value={firstName} onChange={this.handleChange} required/>
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange} required/>
          <input type="text" name="price" value={price} onChange={this.handleChange}/>
          <input type="text" name="type" value={type} onChange={this.handleChange}/>
          <button>add</button>
        </form>
    );
  }
}

export default withState(Form);