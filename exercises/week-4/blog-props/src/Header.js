import React from 'react';
import bgImg from './styles/images/home-bg.jpg';
import Navbar from './Navbar';

const Header = () => {

  return (
    <div className="header-box" style={{backgroundImage:`url(${bgImg})`}}>
    <Navbar />
      <div className="overlay">
        <h1>Clean Blog</h1>
        <h2>A Blog Theme by Start Bootstrap</h2>
      </div>
    </div>
  )
}

export default Header;