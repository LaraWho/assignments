import React, { Component } from 'react';
import sweetie from 'sweetalert2';
const unirest = require('unirest');
const { Provider, Consumer } = React.createContext()

class MyState extends Component {
  constructor() {
    super()

    this.state = {
      scheme: [],
      savedSchemes: [],
      imgURL: '',
      loaded: false,
      id: (Math.random() * 8).toString(36).substring(2)
    }
    
  }
  // this.state.loaded is initially false so when a user is waiting for the response they see the loading screen. When we get the response from the api and the array in state is populated 'loaded' is also set to true and the user is redirected to the component which displays this information
  
  getURLScheme = imgURL => {  
    unirest.get(`https://apicloud-colortag.p.rapidapi.com/tag-url.json?palette=precise&sort=weight&url=${imgURL}`)
      .header("X-RapidAPI-Key", "e040706029msh326877b81ccb7c7p1dcbe2jsna99dde0f41d5")
      .end((res) => {
        this.setState({
          scheme: res.body.tags,
          loaded: true,
          imgURL
        })
      })
    }
  
  // To reset state when the user visits the homepage from inside the app
  refreshPage = () => {
    this.setState({
      loaded: false
    })
  }

  saveScheme = () => {
  const Toast = sweetie.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 2000
  });
    // Get the saved items from local storage
    let item = localStorage.colorSchemes
    if(!item) {
      item = JSON.stringify([])
    }
    let array = JSON.parse(item)
    this.setState(prevState => ({
      savedSchemes: [[this.state.imgURL, this.state.scheme, this.state.id], ...array]
    }), () => {
      localStorage.colorSchemes = JSON.stringify(this.state.savedSchemes)
    })
    Toast.fire({
      type: 'success',
      title: 'saved!'
    })
  }
      
      render() {
        return (
      <Provider value={{
        getURLScheme: this.getURLScheme,
        saveScheme: this.saveScheme,
        refreshPage: this.refreshPage,
        ...this.state
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default MyState;

export function withState(Comp) {
  return props => <Consumer>
                      {value => <Comp {...value} {...props} />}
                  </Consumer>
}