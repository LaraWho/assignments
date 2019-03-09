import React, { Component } from 'react';
import { withState } from '../MyState';
import ColorDetail from './ColorDetail';
import NavBar from './NavBar';

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
    let lastItem = '' 
    let mappedArray = []

    if(array === "null") {
      lastItem = '#333'
    } else {
     mappedArray = array.map((el,i) => {
      lastItem = array[array.length - 1][1][1].color
      return <div key={i} style={{backgroundColor: el[1][1].color}} >
      <button onClick={() => this.deleteScheme(el[2], array)}>delete</button>
                <img src={el[0]} alt=""/> 
                <ColorDetail toShow="saved" localSchemes={el[1]}/> 
              </div> 
      })
    }
console.log(lastItem)
    return (
      <div className="returned-list" style={{backgroundColor: lastItem}} >
        {array === "null" ?
       <img src='https://all4desktop.com/data_images/original/4235049-images-of-love.jpg'/>
      :
      <div>
        {mappedArray}
      </div>
      
      }
        <NavBar inSaved="true"/>
      </div>
    );
  }
}

export default withState(SavedList);