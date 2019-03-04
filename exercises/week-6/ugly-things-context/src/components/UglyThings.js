import React from 'react';

const UglyThings = (props) => {
 
  return (
      <div className="ugly-thing">
         <h1>{props.uglyThing.title}</h1>
         <h1>{props.uglyThing.description}</h1>
         <img src={props.uglyThing.img} alt={props.uglyThing.title} />
     </div>
  );
};

export default UglyThings;