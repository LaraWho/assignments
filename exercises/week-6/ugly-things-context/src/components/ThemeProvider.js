import React, { Component } from 'react';
import { Consumer, Provider } from '../index';

class ThemeProvider extends Component {
  constructor() {
    super() 
    this.state = {
      theme: "dark"
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === "dark" ? "light" : "dark"
    }))
  }

  render() {
    const props = {
      toggleTheme: this.toggleTheme,
      ...this.state
    }
    return (
     <Provider value={props}>
        {this.props.children}
     </Provider>
    );
  }
}

export default ThemeProvider;

export const withTheme = Comp => props => (
  <Consumer>
    {value => <Comp {...value} {...props} />}
  </Consumer>
)