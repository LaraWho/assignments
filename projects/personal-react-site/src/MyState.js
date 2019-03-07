import React, { Component } from 'react';
import colours from './colours.json';
// import axios from 'axios';
let unirest = require('unirest');
const { Provider, Consumer } = React.createContext()

class MyState extends Component {
  constructor() {
    super()

    this.state = {
      scheme: colours,
      savedSchemes: [],
      imgURL: 'https://cdn-images-1.medium.com/max/1600/1*U0erqg3KNPmEogeu-BqbuA.jpeg',
      loaded: false
      
    }
  }
  // https://cdn-images-1.medium.com/max/1600/1*U0erqg3KNPmEogeu-BqbuA.jpeg

  // seeCollection = () => {
  //   let item = localStorage.schemes
  //   let array = JSON.parse(item)
  //   this.setState(prevState => ({
  //     savedSchemes: [array, ...prevState.savedSchemes]
  //   }))
  // }

  getURLScheme = imgURL => {
    unirest.get(`https://apicloud-colortag.p.rapidapi.com/tag-url.json?palette=w3c&sort=weight&url=${imgURL}`)
      .header("X-RapidAPI-Key", "e040706029msh326877b81ccb7c7p1dcbe2jsna99dde0f41d5")
      .end((res) => {
        this.setState({
          scheme: res.body.tags,
          loaded: true,
          imgURL
        })
      });
  }

  saveScheme = (imgURL, scheme) => {
    this.setState(prevState => ({
      savedSchemes: [{imgURL, scheme}, ...prevState.savedSchemes]
    }))
  }
  

  // POST
  // getIMGScheme = () => {
    //   unirest.post("https://apicloud-colortag.p.rapidapi.com/tag-file.json")
    //     .header("X-RapidAPI-Key", "e040706029msh326877b81ccb7c7p1dcbe2jsna99dde0f41d5")
    //     .header("Content-Type", "application/x-www-form-urlencoded")
    //     .send("palette=w3c")
    //     .send("sort=weight")
    //     .end((res) => {
      //     console.log(res.body);
      // });
      // }
      
      
      render() {
        return (
      <Provider value={{
        getURLScheme: this.getURLScheme,
        saveScheme: this.saveScheme,
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