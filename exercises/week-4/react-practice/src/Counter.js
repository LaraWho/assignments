import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  add = () => {
    this.setState(prevState => {
      return({
        counter: prevState.counter + 1
      })
    })
  }

  subtract = () => {
    this.setState(prevState => {
      return({
        counter: prevState.counter - 1
      })
    })
  }

  render() {
    return(
      <div>
        <h1>Count the rats!</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.subtract}>subtract</button>

        <h1>{this.state.counter}</h1>
      </div>
    )
  }

}

export default Counter;