import React from 'react';
import Pets from './Pets';

const Friend = (props) => {

  console.log(props)

  const style = {
    color: 'rebeccapurple',
    margin: "20px",
    padding: "20px",
    paddingBottom: "35px",
    backgroundColor: "#f2f2f2",
    textAlign: "center"
  }

  let mappedPets = props.pets.map((pet, i) => {
    return (
        <Pets key={i+pet.name} petName={pet.name} breed={pet.breed}/>
    )
  })

  return (
    <div style={style}>
        <h2>{props.name} is {props.age}</h2>
        <p>{props.name} has:</p>
        {mappedPets}
    </div>
  )
}

export default Friend;