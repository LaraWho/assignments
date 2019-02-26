import React, {Component} from 'react'; 
const axios = require('axios')

class Animals extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backgroundColor: '',
      animalArr: props.props
    }
  }

  componentDidMount() {
    axios.get('http://www.colr.org/json/color/random').then((res) => { 
      this.setState({
        backgroundColor: `#${res.data.colors[0].hex}`
      }) 
    })
  }

render() {
  let mappedAnimals = this.state.animalArr.map((cutie, i) => {
    return (
      <div key={i+cutie} className="animal-box" style={{backgroundColor: this.state.backgroundColor}}>
        <img src={cutie.image} alt={cutie.name}/>
        <h1>{cutie.name}</h1>
        <p>{cutie.info}</p>
        <button>adopt me now!</button>
      </div>
    )
  })
  return (
    <div className="animals-container">
      {mappedAnimals}
    </div>
  )
  }
}


export default Animals;