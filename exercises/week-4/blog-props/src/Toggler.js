import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  toggle = () => {
    this.setState(({open}) => ({open: !open}))
  }

  render() {
    const Comp = this.props.component;
    return(
      <Comp open={this.state.open} toggle={this.toggle} {...this.props}/>
    )
  }
}
export default Toggler;

export function withToggler(myC) {
  return function(props) {
    return <Toggler component={myC} {...props}/>
  }
}