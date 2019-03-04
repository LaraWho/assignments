import React, { Component } from 'react';
import UglyThings from './UglyThings';
import { withState } from '../shared/MyState';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputs: {
        title: '',
        description: '',
        img: ''
      },
      uglyThings: []
    }
  }

  componentDidMount() {
    this.setState({
      uglyThings: JSON.parse(localStorage.uglyThings)
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: value
      }
    }))
  }

  addUgly = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      uglyThings: [prevState.inputs, ...prevState.uglyThings]
    }), () => localStorage.uglyThings = JSON.stringify(this.state.uglyThings))
  }

  render() {
    console.log(this.props)
    let mapped = this.state.uglyThings.map((el, i) => {
      return <UglyThings key={el+i} uglyThing={el}/>
    })

    return (
    <div>
      <form name="ugly_form" onSubmit={this.addUgly}>
        <input type="text" name="title" onChange={this.handleChange}/>
        <input type="text" name="description" onChange={this.handleChange}/>
        <input type="text" name="img" id="" onChange={this.handleChange}/>
        <button>add ugly thing</button>
      </form>
      <div className="whole-page">
        {mapped}
      </div>
    </div>
    );
  }
}

export default withState(Form);