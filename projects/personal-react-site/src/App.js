import React, { Component } from 'react';
import './styles.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ReturnedColours from './components/ReturnedColours';
import UploadForm from './components/UploadForm';
import SavedList from './components/SavedList';
import ColourDetail from './components/ColourDetail';

class App extends Component {
  // constructor() {
  //   super() 
  // }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={UploadForm} />
          <Route path="/list" component={ReturnedColours}/>
          <Route exact path="/saved" component={SavedList}/>
          <Route path="/saved/:id" component={ColourDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
