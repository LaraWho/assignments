import React, { Component } from 'react';
import './App.css';
import Conditional from './Conditional';

class App extends Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      names: [
        {firstName:'Benedict', 
        lastName: 'Cumberbatch'},
        {firstName:'Benny', 
        lastName: 'Cumberbatch'}
      ]
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addName = (e) => {
    e.preventDefault()
    this.setState((prevState) => {
      let { firstName, lastName } = prevState
      return({
        names: [...prevState.names, {firstName, lastName}],
        firstName: '',
        lastName: ''
      }) 
    })
  }
  
  render() {

    let mappedNames = this.state.names.map((name, i) => {
      return(
        <li key={i+name}>
          {name.firstName} {name.lastName}
        </li>
      )
    })
    return (
      <form className="App" onSubmit={this.addName}>

        <input onChange={this.handleChange} type="text" placeholder="First Name" name="firstName" value={this.state.firstName}/>
        <input onChange={this.handleChange} type="text" placeholder="Last Name" name="lastName" value={this.state.lastName}/>
        <button>add name</button>

        <ol>
          {mappedNames}
        </ol>
       
        <Conditional />
      </form>

    );
  }
}

export default App;
