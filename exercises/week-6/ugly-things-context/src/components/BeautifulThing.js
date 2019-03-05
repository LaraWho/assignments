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
      const { title, imgUrl, description} = this.props.beautifulThing
      return (
        
        <div>
        {this.state.toggle ? 
          <Form button="save" type="edit" beauty={this.props.beautifulThing}/>
            :
        <div className="beautiful-thing">
            <h1>{title}</h1>
            <img src={imgUrl} alt={title} />
            <h1>{description}</h1>
            <button onClick={() => this.props.deleteBeauty(this.props.beautifulThing._id)}>delete</button>
            <button onClick={this.toggleForm}>edit</button> 
          </div>
        }
        </div>

      ); 
    }
  };

export default withState(BeautifulThing);