import React, { Component } from 'react';
import axios from 'axios';
export const { Consumer, Provider } = React.createContext();

class MyState extends Component {
  constructor() {
    super() 
    this.state = {
      beautifulThings: []
    }
  }

  getBeauty = () => {
    axios.get('https://api.vschool.io/lara/todo').then(res => {
      this.setState({
        beautifulThings: res.data
      })
    })
  }

  addBeauty = newBeauty => {
    axios.post('https://api.vschool.io/lara/todo', newBeauty).then(res => {
      this.setState(prevState => ({
        beautifulThings: [...prevState.beautifulThings, res.data],
      }))
    })
  }

  deleteBeauty = id => {
    axios.delete(`https://api.vschool.io/lara/todo/${id}`).then(res => {
      this.setState(prevState => ({
        beautifulThings: prevState.beautifulThings.filter(beauty => {
          return beauty.id !== id
        })
      }))
    })
  }
    
  editBeauty = (id, newBeauty) => {
    axios.put(`https://api.vschool.io/lara/todo/${id}`, newBeauty).then(res => {
      this.setState(prevState => ({
        uglyThings: [...prevState, res.data]
      }))
    })
  }


  render() {
    const props = {
      getBeauty: this.getBeauty,
      editBeauty: this.editBeauty,
      addBeauty: this.addBeauty,
      deleteBeauty: this.deleteBeauty,
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