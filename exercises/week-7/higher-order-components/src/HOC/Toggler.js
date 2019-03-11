import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super()
    this.state = {
      on: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on
    }))
  }

  render() {
    const Comp = this.props.component
    return (
      <Comp on={this.state.on} toggle={this.toggle} {...this.props}/>
    );
  }
}

export default Toggler;

export const withToggler = (C) => (props) => <Toggler component={C} {...props} />