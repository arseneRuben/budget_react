import React from 'react';
import ReactDOM from 'react-dom'; // Utilisez simplement 'react-dom' pour React 17
import './index.css';
import "semantic-ui-css/semantic.min.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import storeConfig  from "./store/configureStore"

const store = storeConfig()
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
