import React, { Component } from 'react';
import './styles.css';
import Superhero from './Superhero';
let heroList = require('./heroList.json');

class App extends Component {

  render() {
    let mappedHeroes = heroList.map((hero, i) => {
      return(
        <div key={i+hero.name}>
           <Superhero name={hero.name} catchphrase={hero.catchphrase} image={hero.image}/>
        </div>
      )      
    })
    return (
      <div className="all-heroes">
        {mappedHeroes}
      </div>
    );
  }
}

export default App;
