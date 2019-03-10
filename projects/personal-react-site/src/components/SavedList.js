import React, { Component } from 'react';
import { withState } from '../MyState';
import ColorDetail from './ColorDetail';
import NavBar from './NavBar';
import UploadForm from './UploadForm';

class SavedList extends Component {

  deleteScheme = (id, array) => {
     let newArray = array.filter((el) => {
        return el[2] !== id
      })
      localStorage.colorSchemes = JSON.stringify(newArray)
      this.forceUpdate()
  }

  render() {
    let item = localStorage.colorSchemes
    let array = JSON.parse(item)
    let lastItem;
    // '#748FA0'
    let mappedArray = array.map((el,i) => {
      lastItem = array[array.length - 1][1][1].color
      return <div key={i} style={{backgroundColor: el[1][1].color}} className="saved-list-colors">
      <h2 onClick={() => this.deleteScheme(el[2], array)}>delete</h2>
                <img src={el[0]} alt=""/> 
                <ColorDetail toShow="saved" localSchemes={el[1]}/> 
              </div> 
      })
    
    return (
      <div className="returned-list" style={{backgroundColor: lastItem}} >
        {array.length === 0 ?
        <div className="saved-list-form">
          <UploadForm history={this.props.history}/>
        </div>
        :
      <div className="saved-list">
        <h2 onClick={() => this.props.history.push('/')}>home</h2>
        {mappedArray}
        <NavBar inSaved="true"/>
      </div>
      
      }
      </div>
    );
  }
}

export default withState(SavedList);