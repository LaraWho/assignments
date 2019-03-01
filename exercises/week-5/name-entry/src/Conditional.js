import React from 'react';
import { withToggler } from './Toggler'; 

const Conditional = ({on, toggle}) => {
    return(
      <div onClick={toggle}>
          {on ?
          <i className="fas fa-hand-middle-finger"> hate</i> 
            :
          <i className="fas fa-heart"> love</i>
          }

      </div>
    )
  }

export default withToggler(Conditional);