// Take it further
// Create a <Die /> component that receives a random number as a prop and displays it (rather than just displaying the 5 numbers in the <DiceBox /> JSX).
// Allow the user to click on a given <Die /> to select it, and that number will not change until the dice reset.
// Have the dice reset (de-selecting all previously selected die) after every 3rd roll.

import React, { Component } from 'react';

class Die extends Component {
  constructor(props) {
    super(props)
    console.log(props.num)

  }
  render() {
    return(
      <div>
        
      </div>
    )
  }
}
export default Die;