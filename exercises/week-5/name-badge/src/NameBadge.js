import React, { Component } from 'react';

class NameBadge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthPlace: '',
      favFood: '',
      info: '',
      people: []
    }
  }

  addPerson = (e) => {
    e.preventDefault()
    // let { phone } = this.state.phone
    // if(typeof phone === "string") {
    //   return Number(phone)
    // }
    // console.log(typeof this.state.phone)
    this.setState((prevState) => {
      let { firstName, lastName, email, phone, birthPlace, favFood, info } = prevState
      return ({
        people: [...prevState.people, {firstName, lastName, email, phone, birthPlace, favFood, info}],
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthPlace: '',
        favFood: '',
        info: ''
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let mappedPeople = this.state.people.map((person, i) => {
      return(
        <div key={i}>
          <h1>Badge:</h1>
          <p>Name: {person.firstName} {person.lastName}</p>
          <p>Place of Birth: {person.birthPlace}</p>
          <p>Email: {person.email}</p>
          <p>Phone: {person.phone}</p>
          <p>Favourite Food: {person.favFood}</p>
          <p>{person.info}</p>
        </div>
      )
    })

    return(
    <div>
      <form onSubmit={this.addPerson} name="personForm">
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" id="" required/>

        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="last Name" id="" required/>

        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}placeholder="Email" id="" required/>

        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Phone" id="" required/>

        <input type="text" name="birthPlace" value={this.state.birthPlace} onChange={this.handleChange} placeholder="Place of Birth" id="" required/>

        <input type="text" name="favFood" value={this.state.favFood} onChange={this.handleChange} placeholder="Favourite Food" id="" required/>

        <textarea name="info" value={this.state.info} onChange={this.handleChange} placeholder="Tell us about yourself..." id="" cols="30" rows="10" required></textarea>

        <button>Submit</button>
      </form> 

        {mappedPeople}
    </div>
    )
  }
}

export default NameBadge;