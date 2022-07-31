import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Opendart from './components/opendart.component';
import reportWebVitals from './reportWebVitals';
import YasamDongusu from './components/yasamdongusu.component';
import StateHookOrnek from './components/statehook.component';

//sananl bir virtual dom 
const root = ReactDOM.createRoot(document.getElementById('ibrahim'));
root.render(
  <React.StrictMode>
    <StateHookOrnek /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
