import React, { Component } from 'react';
import { withState } from '../MyState';
import splat from '../assets/mini-splat.svg'

class UploadForm extends Component {
  constructor() {
    super()
    this.state = {
      imgURL: ''    
    }
  }

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

  redirectUser = () => {
    return !this.props.loaded ? this.props.history.push('/api/list') : null
  }

  goToRandom = () => {
    this.props.history.push('/api/random')
  }
  
  render() {
    return (
      <div className="upload-form" >
        <img src={splat} alt="" onClick={this.goToRandom}/>

        <form onSubmit={this.handleSubmit}>
          <h1>colour curiosity</h1>
          <p>add a URL in the top box, please</p>
          <label>image URL</label>
          <input name="imgURL" value={this.state.imgURL} type="text" onChange={this.handleChange}/>
          <button>upload</button>
        </form>
        
      </div>
    );
  }
}

export default withState(UploadForm);