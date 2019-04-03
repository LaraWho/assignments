import React, { Component } from 'react';
import sweetie from 'sweetalert2';
import { withState } from '../MyState';
import ColorDetail from './ColorDetail';
import NavBar from './NavBar';
import UploadForm from './UploadForm';

class SavedList extends Component {

  deleteScheme = (id, array) => {
    const Toast = sweetie.mixin({
      toast: true,
      position: 'bottom-right',
      showConfirmButton: false,
      timer: 2000
    });

    let newArray = array.filter((el) => {
        return el[2] !== id
      })
      localStorage.colorSchemes = JSON.stringify(newArray)
      this.forceUpdate()
      Toast.fire({
        type: 'success',
        title: 'deleted!'
      })
  }

  render() {
    // Get the items from local storage and save the parsed version to an array which we can map over to display
    let item = localStorage.colorSchemes
    let array = JSON.parse(item)
    // Declaring variable to be used inside the map to colour the containing div
    let lastItem;
    let mappedArray = array.map((scheme, i) => {
      lastItem = array[array.length - 1][1][1].color
      return <div key={scheme[2]+i} style={{backgroundColor: scheme[1][1].color}} className="returned-list saved-list-colors">
      <h2 onClick={() => this.deleteScheme(scheme[2], array)}>delete</h2>
                <img src={scheme[0]} alt=""/> 
                <ColorDetail toShow="saved" localSchemes={scheme[1]}/> 
              </div> 
      })
    
    return (

      // If there are no saved items in local storage then display the form component to upload an image
      <div style={{backgroundColor: lastItem}} >
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