import React from 'react';

const Target = ({target}) => {
  return(
    
    <div className="target">
        <img src={target.image} alt={target.name}/>
        <p>{target.name}</p>
    </div>
  )
}
export default Target;