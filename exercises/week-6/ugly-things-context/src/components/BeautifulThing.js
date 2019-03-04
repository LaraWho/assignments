import React, { Component } from 'react';
import Form from './Form';
import { withState } from '../shared/MyState';

class BeautifulThing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false
    }
  }

  toggleForm = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }
    render() {
      return (
        <div>
        {this.state.toggle ? 
          <Form button="save" type="edit"/>
            :
        <div className="beautiful-thing">
            <h1>{this.props.beautifulThing.title}</h1>
            <img src={this.props.beautifulThing.imgUrl} alt={this.props.beautifulThing.title} />
            <h1>{this.props.beautifulThing.description}</h1>
            <button onClick={() => this.props.deleteBeauty(this.props.beautifulThing.id)}>delete</button>
            <button onClick={this.toggleForm}>edit</button> 
          </div>
        }
        </div>

      ); 
    }
  };

export default withState(BeautifulThing);