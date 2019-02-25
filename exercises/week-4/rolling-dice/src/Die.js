// Take it further
// Create a <Die /> component that receives a random number as a prop and displays it (rather than just displaying the 5 numbers in the <DiceBox /> JSX).
// Allow the user to click on a given <Die /> to select it, and that number will not change until the dice reset.
// Have the dice reset (de-selecting all previously selected die) after every 3rd roll.

import React, { Component } from 'react';

class Die extends Component {
  constructor(props) {
    super(props)

    this.state = {
      number: props.number,
      hold: false
    }
  }

  componentWillReceiveProps() {
    if(!this.state.hold) {
      this.setState({
        number: this.props.number,
      })
    // } else if(this.props.clicks > 3) {
    //   this.setState({
    //     hold: false
    //   })
    }
  }

  holdDie = () => {
    this.setState((prevState) => {
      return({
        number: prevState.number,
        hold: true
      })
    })
  }

  reset = () => {
      this.setState({
        hold: false
      })
  }

  render() {
    console.log(this.props.clicks)
    return(
      <div className="number" >
          <button onClick={this.holdDie}> hold</button>
          <span>{this.state.number}</span>
          <button onClick={this.reset}>reset</button>
      </div>

    )
  }
}
export default Die;