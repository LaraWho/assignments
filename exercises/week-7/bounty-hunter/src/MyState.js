import React, { Component } from 'react';
import axios from 'axios';
export const { Provider, Consumer } = React.createContext()

class myState extends Component {
  constructor() {
    super()
    this.state = {
      bounties: [],
      canEdit: false
    }
  }

  getBounties = () => {
    axios.get('/api/bounties').then(res => {
      this.setState({
        bounties: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  addBounty = (bounty) => {
    axios.post('/api/bounties', bounty).then(res => {
      this.setState(prevState => ({
        bounties: [res.data, ...prevState.bounties]
      }))
    }).catch(err => {
      console.log(err)
    })
  }

  killBounty = (id) => {
    axios.delete(`/api/bounties/${id}`).then(res => {
      console.log(res.data)
      this.getBounties()
    }).catch(err => {
      console.log(err)
    })
  }

  editBounty = (id) => {
    console.log('edit function:', id)
      this.setState(prevState => ({
        canEdit: !prevState.canEdit
      }))
  }

  saveBounty = (id, bounty) => {
    console.log(id, bounty)
    axios.put(`/api/bounties/${id}`, bounty).then(res => {
      console.log(res.data)
      this.setState(prevState => ({
        bounties: [res.data, ...prevState.bounties],
        canEdit: !prevState.canEdit
      }))
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const props = {
      getBounties: this.getBounties,
      addBounty: this.addBounty,
      editBounty: this.editBounty,
      saveBounty: this.saveBounty,
      killBounty: this.killBounty,
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