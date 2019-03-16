import React, { Component } from 'react';
import axios from 'axios';
export const { Provider, Consumer } = React.createContext()

class myState extends Component {
  constructor() {
    super()
    this.state = {
      bounties: [],
      firstName: '',
      lastName: '',
      price: 0,
      type: ''    
    }
  }

  getBounties = () => {
    axios.get('/api/bounties').then(res => {
      this.setState({
        bounties: res.data
      })
    })
  }

  addBounty = (bounty) => {
    axios.post('/api/bounties', bounty).then(res => {
      console.log(res.data)
      this.setState(prevState => ({
        bounties: [res.data, ...prevState.bounties]
      }))
    }).catch(err => {
      console.log(err)
    })
  }
 
  render() {
    const props = {
      getBounties: this.getBounties,
      addBounty: this.addBounty,
      ...this.state
    }
    return (
      <Provider value={props}>
        {this.props.children}
      </Provider>
    );
  }
}

export default myState;

export const withState = Comp => props => (
  <Consumer>
    {value => <Comp {...value} {...props} />}
  </Consumer>
)