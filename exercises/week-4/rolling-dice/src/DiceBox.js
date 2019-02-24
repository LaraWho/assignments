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
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5
    }

  }

  rollDice = () => {
    this.setState({
      one: Math.ceil(Math.random() * 6),
      two: Math.ceil(Math.random() * 6),
      three: Math.ceil(Math.random() * 6),
      four: Math.ceil(Math.random() * 6),
      five: Math.ceil(Math.random() * 6)
    })
  }

  render() {
    
    return(
      <div className="dice-box">
          <div className="dice">
            <span>{this.state.one}</span>
            <span>{this.state.two}</span>
            <span>{this.state.three}</span>
            <span>{this.state.four}</span>
            <span>{this.state.five}</span>
          </div>
          <button onClick={this.rollDice}>roll it!</button>
          <Die num={this.state.one}/>
          <Die num={this.state.two}/>
          <Die num={this.state.three}/>
          <Die num={this.state.four}/>
          <Die num={this.state.five}/>
      </div>
    )
  }
}

export default DiceBox;