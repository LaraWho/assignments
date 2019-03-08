import React, {Component} from 'react';
import { withState } from '../MyState';
import splat from '../assets/mini-splat.svg'

class RandomColors extends Component {

  constructor() {
    super()
    this.state = {
      box1: '#' +  Math.random().toString(16).substr(-6),
      box2: '#' +  Math.random().toString(16).substr(-6),
      box3: '#' +  Math.random().toString(16).substr(-6),
      box4: '#' +  Math.random().toString(16).substr(-6),
      box5: '#' +  Math.random().toString(16).substr(-6),
      box6: '#' +  Math.random().toString(16).substr(-6)
    }
  }
 
  randomise = () => {
    this.setState({
      box1: '#' +  Math.random().toString(16).substr(-6),
      box2: '#' +  Math.random().toString(16).substr(-6),
      box3: '#' +  Math.random().toString(16).substr(-6),
      box4: '#' +  Math.random().toString(16).substr(-6),
      box5: '#' +  Math.random().toString(16).substr(-6),
      box6: '#' +  Math.random().toString(16).substr(-6)
    })
  }

  render() {
    
  return (
    <div className="colors" style={{backgroundColor: this.state.box2}}>
      <div className="color-box" style={{backgroundColor: this.state.box1}}>
      <p>{this.state.box1}</p></div>
      <div className="color-box" style={{backgroundColor: this.state.box2}}>
      <p>{this.state.box2}</p></div>
      <div className="color-box" style={{backgroundColor: this.state.box3}}>
      <p>{this.state.box3}</p></div>
      <div className="color-box" style={{backgroundColor: this.state.box4}}>
      <p>{this.state.box4}</p></div>
      <div className="color-box" style={{backgroundColor: this.state.box5}}>
      <p>{this.state.box5}</p></div>
      <div className="color-box" style={{backgroundColor: this.state.box6}}>
      <p>{this.state.box6}</p></div>
      <img className="splat" src={splat} onClick={this.randomise}/>
    </div>
  );  
  }
};

export default withState(RandomColors);