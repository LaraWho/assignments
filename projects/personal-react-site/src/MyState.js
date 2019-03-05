import React, { Component } from 'react';
import colours from './colours.json';
let unirest = require('unirest');
const { Provider, Consumer } = React.createContext()

class MyState extends Component {
  constructor() {
    super()

    this.state = {
      scheme: colours,
      imgURL: 'https://cdn-images-1.medium.com/max/1600/1*U0erqg3KNPmEogeu-BqbuA.jpeg'
      
    }
  }

  getURLScheme = () => {
    unirest.get(`https://apicloud-colortag.p.rapidapi.com/tag-url.json?palette=precise&sort=weight&url=${this.state.imgURL}`)
      .header("X-RapidAPI-Key", "e040706029msh326877b81ccb7c7p1dcbe2jsna99dde0f41d5")
      .end((res) => {
        console.log(res.body.tags);
        this.setState({
          colours: res.body.tags
        })
      });
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
    console.log(this.state.scheme)
    return (
      <Provider value={{
        getURLScheme: this.getURLScheme,
        getIMGScheme: this.getIMGScheme,
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