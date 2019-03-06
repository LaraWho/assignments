import React, { Component } from 'react';
import './styles.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ReturnedColours from './components/ReturnedColours';
import UploadForm from './components/UploadForm';
// import SavedList from './components/SavedList';
// import ColorDetail from './components/ColorDetail';

class App extends Component {
  // constructor() {
  //   super() 
  // }

  render() {
    return (

      <div className="whole-page">
        {/* <NavBar {...this.props}/> */}
        <Switch>
          <Route exact path="/" component={UploadForm} />
          <Route path="/api/list" component={ReturnedColours} />
          {/* <Route exact path="/api/saved" component={SavedList} />
          <Route path="/api/saved/:id" component={ColorDetail} /> */}
        </Switch>
      </div>
    );
  }
}
export default App;
