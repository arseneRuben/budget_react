import React from 'react';
import ReactDOM from 'react-dom'; // Utilisez simplement 'react-dom' pour React 17
import './index.css';
import "semantic-ui-css/semantic.min.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
