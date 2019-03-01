import React, { Component } from 'react';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './About';
import Products from './Products';
import Item from './Item';


class App extends Component {
  render() {
    return (
      <div className="whole-page">
        <NavBar />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path="/products" component={Products}/>
            <Route path="/products/:_id" component={Item}/>
          </Switch>

        <Footer />
        
      </div>
    );
  }
}

export default App;
