import React from 'react';

const Pets = (props) => {

  return (
      <div>
        <span>{props.petName} the {props.breed} </span>
      </div>
  )
}

export default Pets;