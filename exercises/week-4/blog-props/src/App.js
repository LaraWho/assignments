import React, { Component } from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="whole-page">
        <Header />
        <BlogList />
        <Footer />
      </div>
    );
  }
}

export default App;
