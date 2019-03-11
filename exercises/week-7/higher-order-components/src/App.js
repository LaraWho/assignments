import React, { Component } from 'react';
import './styles.css';
import Home from './Home';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
