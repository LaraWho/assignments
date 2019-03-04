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
    this.props.type === "edit" ? this.props.editBeauty(this.state) : this.props.addBeauty(this.props.beautifulThing.id, this.state)
  }

  
  render() {
    console.log(this.props.button)
    return (
    <div>
      <form name="beauty_form" onSubmit={this.handleSubmit}>
        <input type="text" name="title" onChange={this.handleChange}/>
        <input type="text" name="description" onChange={this.handleChange}/>
        <input type="text" name="imgURL" onChange={this.handleChange}/>
        <button>{this.props.button}</button>
      </form>
      
    </div>
    );
  }
}

export default withState(Form);