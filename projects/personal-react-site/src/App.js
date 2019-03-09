import React, { Component } from 'react';
import UploadForm from './components/UploadForm';
import Loading from './components/Loading';
import RandomColors from './components/RandomColors';
import { Switch, Route, withRouter  } from 'react-router-dom';
import { PageFade } from './transitions';
import './styles.css';
import SavedList from './components/SavedList';

class App extends Component {

  render() {
    const { location } = this.props
    return (
      <div className="whole-page">
        <PageFade location={location}>
          <Switch location={location}>
            <Route exact path="/" component={UploadForm} />
            <Route path="/api/list" component={Loading} />
            <Route path="/api/random" component={RandomColors} />
            <Route path="/api/saved" component={SavedList} />
          </Switch>
        </PageFade>
      </div>
    );
  }
}
export default withRouter(App);
