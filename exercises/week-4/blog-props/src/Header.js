import React from 'react';
import bgImg from './styles/images/home-bg.jpg';

const Header = () => {

  return (
    <div className="header-box" style={{backgroundImage:`url(${bgImg})`}}>
      <div className="overlay">
        <h1>wat</h1>
        <h2>wat wat</h2>
      </div>
    </div>
  )
}

export default Header;