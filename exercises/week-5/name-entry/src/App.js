import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      names: ['Benedict Cumberbatch']
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addName = (e) => {
    e.preventDefault()
    let newName = `${this.state.firstName} ${this.state.lastName}`
    this.setState((prevState) => {
      return({
        names: [...prevState.names, newName]
      }) 
    })
  }
  
  render() {

    let mappedNames = this.state.names.map((name, i) => {
      return(
        <li key={i+name}>
          {name}
        </li>
      )
    })

    return (
      <div className="App">
        <input onChange={this.handleChange} type="text" placeholder="First Name" name="firstName"/>
        <input onChange={this.handleChange} type="text" placeholder="Last Name" name="lastName"/>
        <button onClick={this.addName}>add name</button>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        
        <ul>
          {mappedNames}
        </ul>
       
      </div>
    );
  }
}

export default App;
