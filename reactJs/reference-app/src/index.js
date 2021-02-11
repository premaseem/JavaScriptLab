import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FetchApp from "./FetchApp"
// import reportWebVitals from './reportWebVitals';




// Fetch the Resp api
ReactDOM.render(
    <FetchApp paHide="block"/>,
  document.getElementById('root')
);

