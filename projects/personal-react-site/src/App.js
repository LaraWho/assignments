import React, { Component } from 'react';
import './App.css';
// var unirest = require('unirest');

class App extends Component {
  constructor() {
    super() 
    this.state = {
      colours: [],
      imgURL: 'https://cdn-images-1.medium.com/max/1600/1*U0erqg3KNPmEogeu-BqbuA.jpeg'
    }
  }

  // componentDidMount() {
  //   unirest.get(`https://apicloud-colortag.p.rapidapi.com/tag-url.json?palette=precise&sort=weight&url=${this.state.imgURL}`)
  //     .header("X-RapidAPI-Key", "e040706029msh326877b81ccb7c7p1dcbe2jsna99dde0f41d5")
  //     .end((res) => {
  //       console.log(res.body.tags);
  //       this.setState({
  //         colours: res.body.tags
  //       })
  //     });
  // }

  // POST
  //   unirest.post("https://apicloud-colortag.p.rapidapi.com/tag-file.json")
  //     .header("X-RapidAPI-Key", "e040706029msh326877b81ccb7c7p1dcbe2jsna99dde0f41d5")
  //     .header("Content-Type", "application/x-www-form-urlencoded")
  //     .send("palette=w3c")
  //     .send("sort=weight")
  //     .end((res) => {
  //     console.log(res.body);
  // });

  // const body = {
  //   palette: "simple",
  //   sort: "weight"
  // }
  
  // const header = {
  //   "X-RapidAPI-Key": "8660eb356dmshbeb93f05100d3c3p1b6d19jsn8df5c8803588",
  //   "Content-Type", "application/x-www-form-urlencoded"
  // }
  
  // axios.post(
  //   "https://apicloud-colortag.p.rapidapi.com/tag-file.json",
  //   body,
  //   header
  //   )

//   {label: "DarkSlateGray", color: "#413C3F"}
// App.js:27 {label: "LightSlateGray", color: "#88999E"}
// App.js:27 {label: "DimGray", color: "#3C3E3F"}
// App.js:27 {label: "SlateGray", color: "#6C7B80"}
// App.js:27 {label: "Gray", color: "#808284"}
// App.js:27 {label: "RosyBrown", color: "#896F6A"}
// App.js:27 {label: "Silver", color: "#BABCC0"}
// App.js:27 {label: "Black", color: "#131417"}
// App.js:27 {label: "DarkGray", color: "#A2A5A9"}
// App.js:27 {label: "Sienna", color: "#582624"}
// App.js:27 {label: "LightSteelBlue", color: "#A9B1B6"}
// App.js:27 {label: "SaddleBrown", color: "#471918"}
// App.js:27 {label: "Maroon", color: "#501717"}
// App.js:27 {label: "Gainsboro", color: "#D9D9DC"}
// App.js:27 {label: "LightGray", color: "#D3D5D9"}

  render() {
    let mappedColours = this.state.colours.map((el) => {
      console.log(el)
      return <div style={{backgroundColor: el.color, height: '200px', width: '200px'}}></div>
    })
    return (
      <div className="App">
        <img src={this.state.imgURL} alt=""/>
        {mappedColours}
      </div>
    );
  }
}

export default App;
