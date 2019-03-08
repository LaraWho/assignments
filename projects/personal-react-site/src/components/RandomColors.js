import React, {Component} from 'react';
import axios from 'axios';


class RandomColors extends Component {
  constructor() {
    super()

    this.state = {
      colors: []
    }
  }

  componentDidMount() {
    this.getRandom()
  }


  getRandom = () => {
    axios.get("http://www.colr.org/json/colors/random/7").then(res => {
      this.setState({
        colors: res.data.matching_colors
      })
    })
  }

  render() {
    let mapped = this.state.colors.map((color, i) => {
      return  <div className="random-color" key={color+i} style={{backgroundColor: !color ? '#748FA0' : `#${color}`}}>
                <p>{!color ? '#748FA0' : `#${color}`}</p>
              </div>
    })
    
  return (
    <div className="colors random-colors">
      <div className="nav">
        <h2 onClick={() => this.props.history.push("/")}>home</h2>
        <h2 onClick={this.getRandom}>randomise</h2>
      </div>
    {mapped}
    </div>
  );  
  }
};

export default RandomColors;