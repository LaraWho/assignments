import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
import Target from './Target';
import jabba from './jabba.jpg';
import don from './don.png';

class App extends Component {
  constructor() {
    super()

    this.state = {
      targets: []
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json')
    response.data[5].image = jabba
    this.setState({targets: response.data})
  }

  render() {

    let mappedTargets = this.state.targets.map((target, i) => {
      return(
        <Target key={i+target.name} target={target}/>
      )
    })

    return (
      <div>
        <header className="header">
          <img className="don" src={don} alt="Don"/>
          <h1>Don Corleone's Hit List</h1>
        </header>
        <div className="whole-page">
          {mappedTargets}
        </div>

      </div>
      
    );
  }
}

export default App;
