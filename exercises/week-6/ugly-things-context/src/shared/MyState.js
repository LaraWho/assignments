import React, { Component } from 'react';
import { Consumer, Provider } from '../index';

class MyState extends Component {
  constructor() {
    super() 
    this.state = {
      inputs: {
        title: '',
        description: '',
        img: ''
      },
      uglyThings: []
    }
  }

  render() {
    const props = {
      ...this.state
    }
    return (
     <Provider value={props}>
        {this.props.children}
     </Provider>
    );
  }
}

export default MyState;

export const withState = Comp => props => (
  <Consumer>
    {value => <Comp {...value} {...props} />}
  </Consumer>
)