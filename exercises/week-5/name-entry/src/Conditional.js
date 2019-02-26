import React, {Component} from 'react';

class Conditional extends Component {
  constructor() {
    super()
    this.state = {
      isLoved: false
    }
  }

  clickIt = () => {
    this.setState(prevState => {
      return({
        isLoved: !prevState.isLoved
      })
    })
  }

  render() {
    return(
      <div onClick={this.clickIt}>

        {this.state.isLoved ? 
          <i className="fas fa-hand-middle-finger"> hate</i> 
            :
          <i className="fas fa-heart"> love</i>
        }

      </div>
    )
  }
}
export default Conditional;