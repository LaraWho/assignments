import React, { Component } from 'react';
import './styles.css';
import { Switch, Route } from 'react-router-dom';
// import ReturnedColours from './components/ReturnedColours';
import UploadForm from './components/UploadForm';
import Loading from './components/Loading';
import SavedList from './components/SavedList';
import ColorDetail from './components/ColorDetail';
import NavBar from './components/NavBar';
import RandomColors from './components/RandomColors';



class App extends Component {

  render() {
    return (

      <div className="whole-page">
        <Switch>
          <Route exact path="/" component={UploadForm} />
          {/* <Route exact path="/api/list" component={ReturnedColours} /> */}
          <Route path="/api/list" component={Loading} />
          <Route path="/api/random" component={RandomColors} />
          {/* <Route exact path="/api/saved" component={SavedList} />
          <Route path="/api/saved/:id" component={ColorDetail} /> */}
        </Switch>
      </div>
    );
  }
}
export default App;
