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

  handlePost = (e) => {
    e.preventDefault()
    this.props.addBounty(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      price: 0,
      type: ''
    })
  }

  handleSave = (e) => {
    e.preventDefault()
    this.props.saveBounty(this.props.bounty._id, this.state)
  }

  render() {
    const { firstName, lastName, price, type } = this.state
    const { image, _id } = this.props.bounty
    return (
      <div>

      {this.props.type === "edit" ?
        <form onSubmit={this.handleSave}>
          <input type="text" name="firstName" value={firstName} onChange={this.handleChange} />
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange} />
          <img src={image} alt={firstName}/>
          <input type="text" name="price" value={price} onChange={this.handleChange}/>
          <input type="text" name="type" value={type} onChange={this.handleChange}/>
          <button>save</button>
        </form>
      :
        <form onSubmit={this.handlePost}>
          <input type="text" name="firstName" value={firstName} onChange={this.handleChange} required/>
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange} required/>
          <input type="text" name="price" value={price} onChange={this.handleChange}/>
          <input type="text" name="type" value={type} onChange={this.handleChange}/>
          <button>add</button>
        </form>
      }
      </div>

    );
  }
}

export default withState(Form);