// dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// components
import App from './App';

  // web vitals
  import reportWebVitals from './reportWebVitals';

// variable
const root = ReactDOM.createRoot(document.getElementById('root'));

// renders the compiled app from App.js to the browser
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


  // web vitals
  reportWebVitals();
