import React, { Component } from 'react';
import NameBadge from './NameBadge';
import sweetie from 'sweetalert2';

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        canSubmit: true,
        inputs: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          birthPlace: '',
          favFood: '',
          info: ''
        },
        people: [
          {
            firstName: 'Lara',
            lastName: 'Potjewyd',
            email: 'larapotjewyd@gmail.com',
            phone: '3856664892',
            birthPlace: 'Salt Lake City',
            favFood: 'Pear and Pecorino ravioli',
            info: 'My writing gets worse and worse. Dear, dear, dear, dear, dear. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!'
          },
          {
            firstName: 'Lara',
            lastName: 'Potjewyd',
            email: 'larapotjewyd@gmail.com',
            phone: '3856664892',
            birthPlace: 'Salt Lake City',
            favFood: 'Pear and Pecorino ravioli',
            info: 'My writing gets worse and worse. Dear, dear, dear, dear, dear. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!'
          },
          {
            firstName: 'Lara',
            lastName: 'Potjewyd',
            email: 'larapotjewyd@gmail.com',
            phone: '3856664892',
            birthPlace: 'Salt Lake City',
            favFood: 'Pear and Pecorino ravioli',
            info: 'My writing gets worse and worse. Dear, dear, dear, dear, dear. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!'
          }
        ]
      }
    }


  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => {
      return({
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      })
    })
  }

  checkValues = () => {
    let canSubmit;
    Object.values(this.state.inputs).map((el,i)=> {
      return el.length < 3 ? canSubmit = false : null
    })
    this.setState({canSubmit})
  }
  
  addPerson = (e) => {
    e.preventDefault()
    this.checkValues()
    this.state.canSubmit ?
    this.setState((prevState) => {
      return ({
        people: [prevState.inputs, ...prevState.people],
        inputs: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          birthPlace: '',
          favFood: '',
          info: ''
        }
      })
    }) 
      :
    sweetie.fire('woops, more than 3 characters in each field please!')
  }

  render() {
    let { firstName, lastName, email, phone, birthPlace, favFood, info} = this.state.inputs

    let backgroundColor;
    let mappedPeople = this.state.people.map((person, i) => {
        i % 2 === 0 ? backgroundColor = "#e22828" : backgroundColor = "#1b1b8c"
        return <NameBadge badge={person} key={i} backgroundColor={backgroundColor}/> 
    })
    
    return(
      <div>
        <form onSubmit={this.addPerson} name="personForm">
          <input type="text" name="firstName" value={firstName} onChange={this.handleChange} placeholder="First Name" required />

          <input type="text" name="lastName" value={lastName} onChange={this.handleChange} placeholder="last Name" required />

          <input type="text" name="email" value={email} onChange={this.handleChange}placeholder="Email" required />

          <input type="phone" name="phone" value={phone} onChange={this.handleChange} placeholder="Phone" required />

          <input type="text" name="birthPlace" value={birthPlace} onChange={this.handleChange} placeholder="Place of Birth" required />

          <input type="text" name="favFood" value={favFood} onChange={this.handleChange} placeholder="Favourite Food" required />

          <textarea name="info" value={info} onChange={this.handleChange} placeholder="Tell us about yourself..." required cols="10" rows="5" ></textarea>

          <button>Submit</button>
        </form> 
          {mappedPeople}
      </div>    
    )
  }
}
export default Form;