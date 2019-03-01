import React, { Component } from 'react';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './About';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div className="whole-page">
        <NavBar />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/products" component={Products}/>
            
          </Switch>

        <Footer />
        
      </div>
    );
  }
}

export default App;
