import React, { Component } from 'react';
import { withState } from '../MyState';
import ColorDetail from './ColorDetail';
import NavBar from './NavBar';

class SavedList extends Component {

  render() {
    let item = localStorage.colorSchemes
    let array = JSON.parse(item)
    let lastItem = array[array.length - 1]
    console.log(array)
    let mappedArray = array.map((el,i) => {
      return <div key={i} style={{backgroundColor: el[1][1].color}} >
                <img src={el[0]} alt=""/> 
                <ColorDetail toShow="saved" localSchemes={el[1]}/> 
              </div> 
        
      })

    return (
      <div className="returned-list" style={{backgroundColor: lastItem[1][1].color}} >
        {mappedArray}
        <NavBar inSaved="true"/>
      </div>
    );
  }
}

export default withState(SavedList);