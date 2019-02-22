import React, { Component } from 'react';
import './App.css';
import Box from './Box';
import beyonce from './beyonce.mp3';

class App extends Component {
  constructor() {
    super()

    this.state = {
      box1: '#' +  Math.random().toString(16).substr(-6),
      box2: '#' +  Math.random().toString(16).substr(-6),
      box3: '#' +  Math.random().toString(16).substr(-6),
      box4: '#' +  Math.random().toString(16).substr(-6),
      box5: '#' +  Math.random().toString(16).substr(-6),
      box6: '#' +  Math.random().toString(16).substr(-6),
      box7: '#' +  Math.random().toString(16).substr(-6),
      box8: '#' +  Math.random().toString(16).substr(-6),
      showColor: true,
      beyonce: false
    }
  }

  audio = new Audio(beyonce)
  toggleBeyonce = () => {
    this.setState({
      beyonce: !this.state.beyonce
    }, () => {
      this.state.beyonce ? this.audio.play() : this.audio.pause()
    })
  }

  refreshColors = () => {
    this.setState({
      box1: '#' +  Math.random().toString(16).substr(-6),
      box2: '#' +  Math.random().toString(16).substr(-6),
      box3: '#' +  Math.random().toString(16).substr(-6),
      box4: '#' +  Math.random().toString(16).substr(-6),
      box5: '#' +  Math.random().toString(16).substr(-6),
      box6: '#' +  Math.random().toString(16).substr(-6),
      box7: '#' +  Math.random().toString(16).substr(-6),
      box8: '#' +  Math.random().toString(16).substr(-6)
    })
  }

  toggleColor = () => {
    let newColor = this.state.showColor ? "#333" : "#FFF";
    this.setState((prevState) => {
      return({
        showColor: !prevState.showColor,
        box1: newColor,
        box2: newColor,
        box3: newColor,
        box4: newColor
      })
    })
  }

  changeToPurple = () => {
    let newColor = this.state.showColor ? "#9900e6" : "#cc66ff"
    this.setState((prevState) => {
      return({
        showColor: !prevState.showColor,
        box1: newColor,
        box2: newColor
      })
    })
  }

  changeToBlue1 = () => {
    let newColor = this.state.showColor ? "#004d99" : "#3399ff"
    this.setState(prevState => {
      return({
        showColor: !prevState.showColor,
        box3: newColor
      })
    })
  }

  changeToBlue2 = () => {
    let newColor = this.state.showColor ? "#004d99" : "#3399ff"
    this.setState(prevState => {
      return({
        showColor: !prevState.showColor,
        box4: newColor
      })
    })
  }
  changeColor5 = () => {
    this.setState({
        box5: '#' +  Math.random().toString(16).substr(-6)
      })
  }
  changeColor6 = () => {
    this.setState({
        box6: '#' +  Math.random().toString(16).substr(-6)
      })
  }

  changeColor7 = () => {
    this.setState({
        box7: '#' +  Math.random().toString(16).substr(-6)
      })
  }
  changeColor8 = () => {
    this.setState({
        box8: '#' +  Math.random().toString(16).substr(-6)
      })
  }

  render() {
    return (
      <div className="container">
        <Box backgroundColor={this.state.box1}/>
        <Box backgroundColor={this.state.box2}/>
        <Box backgroundColor={this.state.box3}/>
        <Box backgroundColor={this.state.box4}/>
        <Box backgroundColor={this.state.box5}/>
        <Box backgroundColor={this.state.box6}/>
        <Box backgroundColor={this.state.box7}/>
        <Box backgroundColor={this.state.box8}/>
        <button onClick={this.toggleColor}>Click me!</button>
        <button onClick={this.changeToPurple}>Click me!</button>
        <button onClick={this.changeToBlue1}>Click me!</button>
        <button onClick={this.changeToBlue2}>Click me!</button>
        <button onClick={this.changeColor5}>Click me!</button>
        <button onClick={this.changeColor6}>Click me!</button>
        <button onClick={this.changeColor7}>Click me!</button>
        <button onClick={this.changeColor8}>Click me!</button>
        <button onClick={this.refreshColors}>Click me!</button>
        <button onClick={this.toggleBeyonce}>Click me!</button>
      </div>
    );
  }
}

export default App;
