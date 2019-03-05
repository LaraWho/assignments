import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyState from './MyState';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  
    <BrowserRouter>
      <MyState>
        <App />
      </MyState>
    </BrowserRouter>
  
  , document.getElementById('root'));

