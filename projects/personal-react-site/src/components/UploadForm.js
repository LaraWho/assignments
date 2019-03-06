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
    return (
      <div className="upload-form" >
        <form onSubmit={this.handleSubmit}>
          <h1>colour curiosity</h1>
          <p>add a URL in the top box, please</p>
          <label>image URL</label>
          <input name="imgURL" value={this.state.imgURL} type="text" onChange={this.handleChange}/>
          
          <p> or </p>

          <label>own image</label>
          <input type="text"/>
          <button>upload</button>
        </form>
      </div>
    );
  }
}

export default withState(UploadForm);