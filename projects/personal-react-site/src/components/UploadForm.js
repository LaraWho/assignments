import React, { Component } from 'react';
import { withState } from '../MyState';
import splat from '../assets/mini-splat.svg'
import {Link} from 'react-router-dom'

class UploadForm extends Component {
  constructor() {
    super()
    this.state = {
      imgURL: ''    
    }
  }

  // Immediately run the function in MyState.js which sets the item 'loaded' in state to be false so an image can be uploaded
  componentDidMount() {
    this.props.refreshPage()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getURLScheme(this.state.imgURL)
    this.redirectUser()
  }

  // Using the boolean in MyState to redirect the user to the correct page after the api call returns the information
  redirectUser = () => {
    return !this.props.loaded ? this.props.history.push("/api/list") : null
  }

  goToRandom = () => {
    this.props.history.push("/api/random")
  }
  
  render() {
    return (
      <div className="upload-form" >
        <img src={splat} alt="paint splat" onClick={this.goToRandom}/>

        <form onSubmit={this.handleSubmit}>
          <h1>colour curiosity</h1>
          <p>see a list of the most prominent colours in an image</p>
          <label>add an image URL in this box, please</label>
          <input name="imgURL" value={this.state.imgURL} type="text" onChange={this.handleChange}/>
          <button>upload</button>
          <p>or</p>
          <Link to="/api/saved" className="upload-form-link">see saved colours</Link>
        </form>
        
      </div>
    );
  }
}

export default withState(UploadForm);