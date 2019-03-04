import React, { Component } from 'react';
import './styles/reset.css';
import './styles/styles.css';
// import Header from './components/Header';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        {/* <Header /> */}
      </div>
    );
  }
}

export default App;
