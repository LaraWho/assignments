import React, { Component } from 'react';
// import colours from './colours.json';
let unirest = require('unirest');
const { Provider, Consumer } = React.createContext()

class MyState extends Component {
  constructor() {
    super()

    this.state = {
      scheme: [],
      savedSchemes: [],
      imgURL: ''
      
    }
  }

  seeCollection = () => {
    let item = localStorage.schemes
    let array = JSON.parse(item)
    this.setState(prevState => ({
      savedSchemes: [array, ...prevState.savedSchemes]
    }), () => {
    this.props.history.push(`/api/saved`)
    })
  }

  seeColors = (id) => {
    this.props.history.push(`/api/saved/${id}`)

  }

  getURLScheme = imgURL => {
    unirest.get(`https://apicloud-colortag.p.rapidapi.com/tag-url.json?palette=w3c&sort=weight&url=${imgURL}`)
      .header("X-RapidAPI-Key", "e040706029msh326877b81ccb7c7p1dcbe2jsna99dde0f41d5")
      .end((res) => {
        console.log(res.body.tags);
        this.setState({
          scheme: res.body.tags,
          imgURL
        })
        console.log(this.state.imgURL)
      });
  }

  saveScheme = (imgURL, newScheme) => {
    this.setState(prevState => ({
      savedSchemes: [{imgURL, newScheme}, ...prevState.savedSchemes]
    }), () => {
      localStorage.schemes = JSON.stringify(this.state.savedSchemes)
    })
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
        console.log(this.state.savedSchemes)
        return (
      <Provider value={{
        getURLScheme: this.getURLScheme,
        getIMGScheme: this.getIMGScheme,
        saveScheme: this.saveScheme,
        seeColors: this.seeColors,
        seeCollection: this.seeCollection,
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