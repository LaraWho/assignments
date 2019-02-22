import React from 'react';
import Nav from './components/Nav';
import Info from './components/Info';
import Animals from './components/Animals';
import Footer from './components/Footer';
import animals from './components/animalList';
import Counter from './Counter';

const App = () => {
  return (
    <div className="whole-page">
      <Nav />
      <Counter />
      <Info />
        <Animals props={animals.animals}/>
      <Footer />
    </div>
  )
}

export default App;