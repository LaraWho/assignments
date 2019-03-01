import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super()

    this.state = {
      on: false
    }
  }

  toggle = () => {
    this.setState(({on}) => ({
      on: !on
    }))
  }
  
  render() {
    const Comp = this.props.component
    return(
      <Comp on={this.state.on} toggle={this.toggle} {...this.props}/>
    )
  }

}
export default Toggler;

export function withToggler(C) {
  return function(props) {
    return <Toggler component={C} {...props} />
  }
}

