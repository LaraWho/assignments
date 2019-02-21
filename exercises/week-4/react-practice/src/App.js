import React from 'react';
import Nav from './components/Nav';
import Info from './components/Info';
import Animals from './components/Animals';
import Footer from './components/Footer';
import animals from './components/animalList';

const App = () => {
  return (
    <div className="whole-page">
      <Nav />
      <Info />
        <Animals props={animals.animals}/>
  
      <Footer />
    </div>
  )
}

export default App;