import React, { Component } from 'react';
import { withState } from '../shared/MyState';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
        title: '',
        description: '',
        imgURL: ''
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.type === "add" ? this.props.addBeauty(this.state) : this.props.editBeauty(this.props.beauty._id, this.state)
  }
  
  render() {

    return (
      <form name="beauty_form" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} name="title" onChange={this.handleChange}/>
        <input type="text" value={this.state.description} name="description" onChange={this.handleChange}/>
        <input type="text" value={this.state.imgURL} name="imgURL" onChange={this.handleChange}/>
        <button>{this.props.button}</button>
      </form>
      );
  }
}

export default withState(Form);