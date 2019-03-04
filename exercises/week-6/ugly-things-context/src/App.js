import React, { Component } from 'react';
import './styles/reset.css';
import './styles/styles.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
 
  render() {
    return (
      <div>
        <Form button="submit" type="add"/>
        <List />
      </div>
    );
  }
}

export default App;
