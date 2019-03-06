import React, { Component } from 'react';
import { withState } from '../MyState';

class UploadForm extends Component {
  constructor() {
    super()
    this.state = {
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
    this.props.getURLScheme(this.state.imgURL)
    this.props.history.push('/api/list')
  }
  
  render() {
    console.log()
    return (
      <div className="upload-form" onSubmit={this.handleSubmit}>
        <form>
          <input name="imgURL" value={this.state.imgURL} type="text" onChange={this.handleChange}/>
          <input type="text"/>
          <button>upload</button>
        </form>
      </div>
    );
  }
}

export default withState(UploadForm);