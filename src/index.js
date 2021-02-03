import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

//import * as serviceWorker from "./serviceWorker";

ReactDOM.render(

  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
