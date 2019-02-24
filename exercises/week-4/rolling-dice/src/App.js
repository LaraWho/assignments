// Using what you have just learned about state in React, you are going to create a  <DiceBox /> component that renders 5 dice numbers for the user to view.

import React, { Component } from 'react';
import './App.css';
import DiceBox from './DiceBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DiceBox />
      </div>
    );
  }
}

export default App;