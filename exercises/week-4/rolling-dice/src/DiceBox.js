// You Must
// Create a class component called <DiceBox />
// Write a method in that class that produces 5 random numbers between 1 and 6 and saves them in state.
// Display the 5 random numbers in your <DiceBox /> JSX.
// Provide a button the user can click on that will redo step 2 and present the new numbers to the user.

import React, { Component } from 'react';
import Die from './Die';

class DiceBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      one: Math.ceil(Math.random() * 6),
      two: Math.ceil(Math.random() * 6),
      three: Math.ceil(Math.random() * 6),
      four: Math.ceil(Math.random() * 6),
      five: Math.ceil(Math.random() * 6),
    }

  }

  rollDice = () => {
    console.log(this.state)
    this.setState({
      one: Math.ceil(Math.random() * 6),
      two: Math.ceil(Math.random() * 6),
      three: Math.ceil(Math.random() * 6),
      four: Math.ceil(Math.random() * 6),
      five: Math.ceil(Math.random() * 6),
    })
  }

  render() {
    
    return(
      <div className="dice-box">
        <div className="dice">
          <Die number={this.state.one} />
          <Die number={this.state.two} />
          <Die number={this.state.three} />
          <Die number={this.state.four} />
          <Die number={this.state.five} />
      </div>
          <button onClick={this.rollDice}>roll it!</button>
      </div>
    )
  }
}

export default DiceBox;