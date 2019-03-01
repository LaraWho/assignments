import React from 'react';
import Toggle from './Toggle';

const Target = ({target}) => {

  return(
    <div className="target">
      <Toggle render={({isToggled, toggler}) => 
        <>  
            <img src={target.image} alt={target.name}  onClick={toggler}/>
            
            <div id={isToggled ? "overlay-show" : "overlay-hide"} onClick={toggler}><h1>ELIMINATED</h1></div>

            <p>{target.name}</p>
        </>
      }/>
    </div>
  )
}
export default Target;