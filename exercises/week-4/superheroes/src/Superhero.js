import React, { Component } from 'react';
import sweetie from 'sweetalert2';

class Superhero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hero: props.name,
      catchphrase: props.catchphrase,
      image: props.image
    }
  }

      sayCatchphrase = () => {
        sweetie.fire({
          title: this.state.catchphrase,
          customClass: "sweetie",
          customContainerClass: "sweetie"
        })
      }


  render() {
    return(
      <div className="one-hero">
        <h1>{this.state.hero}</h1>
        <img src={this.state.image} alt={this.state.hero} onClick={this.sayCatchphrase}/>
      </div>
    )
  }
}

export default Superhero;