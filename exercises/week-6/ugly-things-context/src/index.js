import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyState from './shared/MyState';

ReactDOM.render(
  <MyState >
    <App />
  </MyState>
, document.getElementById('root'));

